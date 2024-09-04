import { NextPage } from "next";
import {
  Box,
  Avatar,
  Text,
  Button,
  Flex,
  Stack,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { FiHeart, FiX } from "react-icons/fi";
import Link from "next/link";

const Profile: NextPage = () => {
  const user = {
    name: "james.eth",
    location: "Palo Alto",
    avatarUrl: "image1.png",
    badges: [
      { text: "Builder Score 69 pts." },
      { text: "Won 3 hackathons" },
      { text: "Won 13 bounties" },
    ],
    interest: "Serial hacker",
  };

  return (
    <Box maxW="md" mx="auto" p="4">
      <Button
        leftIcon={<FaArrowLeft />}
        variant="ghost"
        position="absolute"
        top="4"
        left="4"
        as={Link}
        href={'/'}
      />
      
      <Flex direction="column" align="center" mt="12">
        {/* Profile Image */}
        <Box
          w="full"
          h="340px"
          bgImage={`url(${user.avatarUrl})`}
          bgPosition="center"
          bgSize="cover"
          borderRadius="2xl"
        />

        {/* Like / Dislike buttons */}
      

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
          <Box w="full" overflowX="scroll">
            <HStack spacing={3} py='4'>
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
            <Text>Interest</Text>
            <Text fontWeight="600">{user.interest}</Text>
          </Box>
        </VStack>

        {/* Buttons */}
        <Stack mt="8" spacing="4" w="full">
          <Button size="lg" color={'white'} rounded={'200'} bg="#1652F0" as={Link} href={'/qr'}>
            Show QR
          </Button>
          <Button size="lg" colorScheme="red" rounded={'200'}>
            DM jesse.eth
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Profile;
