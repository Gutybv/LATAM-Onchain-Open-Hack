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
  HStack,
  Badge,
} from "@chakra-ui/react";
import { FiHeart, FiX } from "react-icons/fi";
import { useWriteContract } from "wagmi";
import abi from "../abi/abi.json";
import { parseEther } from "viem";

const profiles = [
  
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


  const user = profiles[index];
  const { writeContract } = useWriteContract();
  return (
    <Flex
      direction="column"
      align="center"
      maxW="md"
      // borderWidth="1px"
      // borderRadius="2xl"
      overflow="hidden"
      // bg="white"
      // boxShadow="lg"
      position="relative"
    >
      {/* Profile Image */}
      <Box
        w="full"
        h="340px"
        bgImage={`url(${user.avatarUrl})`}
        bgPosition="center"
        bgSize="cover"
        borderBottomRadius="2xl" // Only round the top corners
        borderTopRadius="2xl" // Only round the top corners
      />
  
      {/* Like / Dislike buttons */}
      <HStack spacing={8} mt={-8} zIndex={1}>
        <IconButton
          aria-label="Dislike"
          icon={<FiX />}
          fontSize={30}
          boxSize={14}
          isRound
          bg="#121212"
          color="white"
          onClick={handleNext}
        />
        <IconButton
          aria-label="Like"
          icon={<FiHeart />}
          fontSize={26}
          boxSize={14}
          isRound
          bg="#1652F0"
          color="white"
          onClick={() =>
            writeContract({
              address: "0x135b2718Cac2b5fD3d7158Fe962c038B126209B3",
              abi: abi.abi,
              functionName: "like",
              args: ["0x85e29904e7205fcDD9A0F88c9E3053bCF75617FA"],
              value: parseEther("0.0001"),
            })
          }
        />
      </HStack>
  
      {/* User Details */}
      <VStack spacing={3} mt={4} w="full" align="stretch">
        <HStack justify="space-between" w="full" px={4}>
          <Box textAlign="left">
            <Text fontSize="sm" color="gray.500">
              Name
            </Text>
            <Text fontSize="xl" fontWeight="600">
              {user.name}
            </Text>
          </Box>
          <Box textAlign="right">
            <Text fontSize="sm" color="gray.500">
              Location
            </Text>
            <Text fontSize="xl" fontWeight="600">
              {user.location}
            </Text>
          </Box>
        </HStack>
  
        {/* Badges */}
        <Box w="full" overflowX="scroll" >
          <HStack spacing={3}  py='4' >
            {user.badges.map((badge, idx) => (
              <Box
                key={idx}
                bg="#1652F0"
                color="white"
                px={4}
                mx={0}
                py={2}
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                minW="120px"
                h="90px"
              >
                <Text fontSize="sm" fontWeight="bold" textAlign="center">
                  {badge.text}
                </Text>
              </Box>
            ))}
          </HStack>
        </Box>
  
        {/* Interest */}
        <Box w="full" px={4}>
          <Text >Interest</Text>
          <Text fontWeight="600">{user.interest}</Text>
        </Box>
      </VStack>
    </Flex>
  );
  
};
