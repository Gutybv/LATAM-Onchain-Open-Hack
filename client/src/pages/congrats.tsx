import { NextPage } from "next";

import { Box, VStack, Circle, Text, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Congrats: NextPage = () => {


  return (
    <Box h="100vh" bg="white" p={4}>
    <VStack spacing={6} align="center" justify="center" h="full">
      <Circle size="100px" bg="#1652F0">
        <CheckIcon color="white" boxSize={10} />
      </Circle>
      
      <Text fontSize="2xl" fontWeight="bold">
        Refunded: $15
      </Text>
      
      <Text color="gray.500" fontSize="sm">
        Keep scrolling
      </Text>
      <Text color="gray.500" fontSize="sm" mt={-4}>
        Keep building
      </Text>
      
      <Button 
  background={"#1652F0"}
   color={'white'}
        borderRadius="full"
        mt={4}
        as={Link}
        href={'/'}
      >
        Go to Home
      </Button>
    </VStack>
  </Box>
  );
};

export default Congrats;
