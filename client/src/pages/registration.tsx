import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  const account = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!account.address) {
      router.push("/");
    }
  }, [account]);

  const { openConnectModal } = useConnectModal();
  return (
    <Stack
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      align={"center"}
      gap={4}
    >
      <Heading color={"#1652F0"}>Registration</Heading>
      <Text color={"#1652F0"}>Find builders, network, and ship cool stuff</Text>
 
    </Stack>
  );
};

export default Home;
