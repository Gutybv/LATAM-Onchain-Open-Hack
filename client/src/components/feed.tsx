import React, { useEffect } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import abi from "../abi/abi.json";
import { Stack } from "@chakra-ui/react";
import { ProfileCard } from "./profileCard";


export const Feed = () => {
  const { data: getRegisteredUsers } = useReadContract({
    address: "0x0B92B74e9e19228FE45FD7ab49b75b4ee5D0d483",
    abi: abi.abi,
    functionName: "getRegisteredUsers",
  });

  const account = useAccount();
  const { writeContract } = useWriteContract();

  useEffect(() => {
    if (account.address && getRegisteredUsers) {
      if (!(getRegisteredUsers as Array<string>).includes(account.address)) {
        writeContract({
          abi: abi.abi,
          address: "0x0B92B74e9e19228FE45FD7ab49b75b4ee5D0d483",
          functionName: "register",
        });
      }
    }
  }, [getRegisteredUsers]);



  return (
    <Stack align={"center"}>
      {getRegisteredUsers &&
        //@ts-ignore
        getRegisteredUsers.map((data: any, index: any) => (
          <Stack key={index}>
            <ProfileCard address={data} index={index}/>
          </Stack>
        ))}
    </Stack>
  );
};
