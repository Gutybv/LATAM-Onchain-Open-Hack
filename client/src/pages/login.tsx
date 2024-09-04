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
      if (account.address) {
        router.push("/");
      }
    }, [account]);
  
    const { openConnectModal } = useConnectModal();
  return (
    <Stack width={"100%"} height={"100vh"} justifyContent={'center'} align={'center'} gap={4}>
      <Heading color={"#1652F0"}>BUILDer</Heading>
      <Text color={"#1652F0"}>Find builders, network, and ship cool stuff</Text>
   <Button onClick={openConnectModal} type="button" variant='outline' color={"#1652F0"} borderColor={'#1652F0'}>Connect Wallet</Button>
    </Stack>
  );
};

export default Home;
