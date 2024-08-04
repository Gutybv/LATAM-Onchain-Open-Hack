import { NextPage } from "next";
import {
  Box,
  Avatar,
  Heading,
  Text,
  Button,
  Flex,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { FaArrowLeft, FaCrown } from "react-icons/fa";
import Link from "next/link";

const Profile: NextPage = () => {
  return (
    <Box maxW="sm" mx="auto" p="4">
      {/* Icono de retroceso */}
      <Button
        leftIcon={<FaArrowLeft />}
        variant="ghost"
        position="absolute"
        top="4"
        left="4"
        as={Link}
        href={'/'}
      />
      {/* Avatar y nombre */}
      <Box textAlign="center" mt="12">
        <Avatar
          size="xl"
          name="james.eth"
          src="image1.png" // Reemplaza con la URL del avatar
          mb="4"
        />
        <Heading size="md">james.eth</Heading>
        <Text fontSize="sm" color="gray.500">
          Serial hacker
        </Text>
        <Text fontSize="xs" color="gray.400">
          Palo Alto
        </Text>
      </Box>
      {/* Puntos y logros */}
      <Stack direction="row" spacing="4" justify="center" mt="6">
        <Box textAlign="center">
          <Box
            borderRadius="md"
            bg="orange.100"
            p="2"
            px="4"
            color="orange.800"
            fontSize="sm"
          >
            Builder Score
          </Box>
          <Text fontSize="lg" fontWeight="bold">
            69 pts.
          </Text>
        </Box>
        <Box textAlign="center">
          <Box
            borderRadius="md"
            bg="orange.100"
            p="2"
            px="4"
            color="orange.800"
            fontSize="sm"
          >
            Won 3 hackathons
          </Box>
          <Text fontSize="lg" fontWeight="bold">
            +5 pts.
          </Text>
        </Box>
        <Box textAlign="center">
          <Box
            borderRadius="md"
            bg="orange.100"
            p="2"
            px="4"
            color="orange.800"
            fontSize="sm"
          >
            Won 13 bounty
          </Box>
          <Text fontSize="lg" fontWeight="bold">
            +42 pts.
          </Text>
        </Box>
      </Stack>
      {/* Botones */}
      <Stack mt="8" spacing="4">
        <Button size="lg" colorScheme="orange" as={Link} href={'/qr'}>
          Show QR
        </Button>
        <Button size="lg" colorScheme="red">
          DM jesse.eth
        </Button>
      </Stack>
    </Box>
  );
};

export default Profile;
