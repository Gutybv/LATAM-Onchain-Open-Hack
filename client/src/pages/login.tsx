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
      <Heading color={"#DA5C3F"}>BUILDer</Heading>
      <Text color={"#C56666"}>Find builders, network, and ship cool stuff</Text>
   <Button onClick={openConnectModal} type="button" variant='outline' color={"#DA5C3F"} borderColor={'#DA5C3F'}>Connect Wallet</Button>
    </Stack>
  );
};

export default Home;
