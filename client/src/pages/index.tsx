"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { Feed } from "../components/feed";
import { HStack, Stack } from "@chakra-ui/react";
import MobileMenu from "../components/menu";

const Home: NextPage = () => {
  const account = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!account.address) {
      router.push("/login");
    }
  }, [account]);

  return (
    <Stack gap={2}>
      <HStack justify={'flex-end'} p={4}>
        <ConnectButton />
      </HStack>

      <Feed />
      <MobileMenu />
    </Stack>
  );
};

export default Home;
