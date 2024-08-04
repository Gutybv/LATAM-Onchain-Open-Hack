import {
  Box,
  Flex,
  Text,
  Avatar,
  Button,
  IconButton,
  Tag,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import { FiHeart, FiX } from "react-icons/fi";
import { useWriteContract } from "wagmi";
import abi from "../abi/abi.json";
import { parseEther } from "viem";

const profiles = [
  {
    name: "james.eth",
    location: "Palo Alto",
    avatarUrl: "image1.png",
    badges: [
      {
        text: "He will probably rug you",
      },
      {
        text: "Builder Score 120 pts",
      },
      {
        text: "Based hacks 2 projects",
      },
    ],
    interest: "Serial hacker",
  },
  {
    name: "alice.eth",
    location: "New York",
    avatarUrl: "image2.png",
    badges: [
      {
        text: "Trusted Developer",
      },
      {
        text: "Builder Score 150 pts",
      },
      {
        text: "Based hacks 5 projects",
      },
    ],
    interest: "Blockchain enthusiast",
  },
  {
    name: "bob.eth",
    location: "San Francisco",
    avatarUrl: "image3.png",
    badges: [
      {
        text: "Innovative Thinker",
      },
      {
        text: "Builder Score 200 pts",
      },
      {
        text: "Based hacks 3 projects",
      },
    ],
    interest: "Tech entrepreneur",
  },
  {
    name: "carol.eth",
    location: "Los Angeles",
    avatarUrl: "image4.png",
    badges: [
      {
        text: "Crypto Pioneer",
      },
      {
        text: "Builder Score 180 pts",
      },
      {
        text: "Based hacks 4 projects",
      },
    ],
    interest: "DeFi strategist",
  },
  {
    name: "dave.eth",
    location: "Seattle",
    avatarUrl: "image5.png",
    badges: [
      {
        text: "Blockchain Guru",
      },
      {
        text: "Builder Score 160 pts",
      },
      {
        text: "Based hacks 6 projects",
      },
    ],
    interest: "Smart contract developer",
  },
  {
    name: "eve.eth",
    location: "Austin",
    avatarUrl: "image6.png",
    badges: [
      {
        text: "Ethereum Expert",
      },
      {
        text: "Builder Score 140 pts",
      },
      {
        text: "Based hacks 3 projects",
      },
    ],
    interest: "NFT artist",
  },
  {
    name: "frank.eth",
    location: "Chicago",
    avatarUrl: "image7.png",
    badges: [
      {
        text: "Web3 Visionary",
      },
      {
        text: "Builder Score 130 pts",
      },
      {
        text: "Based hacks 7 projects",
      },
    ],
    interest: "Crypto investor",
  },
];


export const ProfileCard = ({ address, index, handlePrevious, handleNext }: any) => {
  const { writeContract } = useWriteContract();

  const user = profiles[index];
  return (
    <Flex
      direction="column"
      align="center"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="lg"
    >
      <Box w="full" h="300px" bg="#DA5C3F" bgImage={user.avatarUrl}></Box>
      <VStack spacing={4} mt={6} mb={6} align="stretch" w="full" px={4}>
        <Flex justify="space-between">
        <Box>
          <Text fontWeight="bold">name</Text>
          <Text fontWeight="bold" fontSize="xl">
            {user.name}
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Location</Text>
          <Text fontWeight="bold" fontSize="xl">
          {user.location}
          </Text>
        </Box>

        </Flex>
        <Flex justify="center">
          <IconButton
            aria-label="Dislike"
            icon={<FiX />}
            size="lg"
            isRound
            bg="black"
            color="white"
            mr={4}
            onClick={handlePrevious}
          />
          <IconButton
            aria-label="Like"
            icon={<FiHeart />}
            size="lg"
            isRound
            bg="#DA5C3F"
            color="white"
            onClick={handleNext}
          />
        </Flex>
        <Box gap={4} flexDir={'column'} >
          {user.badges.map((badge, index) => (    <Tag
            size="lg"
            variant="subtle"
            background="#DA5C3F"
            color={"white"}
            mb={2}
            key={index}
          >
            <TagLabel>{badge.text}</TagLabel>
          </Tag>))}
      
         
        </Box>
        <Box>
          <Text fontWeight="bold">Interest</Text>
          <Text>{user.interest}</Text>
        </Box>
      </VStack>
    </Flex>
  );
};
