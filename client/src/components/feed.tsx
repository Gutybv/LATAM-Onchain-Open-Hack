import React, { useEffect, useState } from "react";
import {
  useAccount,
  useReadContract,
  useWatchContractEvent,
  useWriteContract,
} from "wagmi";
import abi from "../abi/abi.json";
import { Button, Stack } from "@chakra-ui/react";
import { ProfileCard } from "./profileCard";

export const Feed = () => {
  const { data: getRegisteredUsers } = useReadContract({
    address: "0x135b2718Cac2b5fD3d7158Fe962c038B126209B3",
    abi: abi.abi,
    functionName: "getRegisteredUsers",
  });

  const account = useAccount();
  const { writeContract } = useWriteContract();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (getRegisteredUsers) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % (getRegisteredUsers as Array<string>).length
      );
    }
  };

  const handlePrevious = () => {
    if (getRegisteredUsers) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0
          ? (getRegisteredUsers as Array<string>).length - 1
          : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    if (account.address && getRegisteredUsers) {
      if (!(getRegisteredUsers as Array<string>).includes(account.address)) {
        writeContract({
          abi: abi.abi,
          address: "0x135b2718Cac2b5fD3d7158Fe962c038B126209B3",
          functionName: "register",
        });
      }
    }
  }, []);

  return (
    <Stack align={"center"}>
      {getRegisteredUsers
        ? (getRegisteredUsers as Array<string>).length > 0 && (
            <ProfileCard
              address={(getRegisteredUsers as Array<string>)[currentIndex]}
              index={currentIndex}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          )
        : null}
    </Stack>
  );
};
