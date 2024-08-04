// components/MobileMenu.js
import { Box, IconButton, Flex } from '@chakra-ui/react';
import { FaMoneyCheck, FaHandshake, FaHeart, FaComment } from 'react-icons/fa';

const MobileMenu = () => {
  return (
    <Flex
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg="white"
      boxShadow="md"
      justifyContent="space-around"
      padding="10px"
      zIndex="10"
      pb={4}
    >
      <IconButton
        icon={<FaMoneyCheck />}
        aria-label="Money"
        variant="ghost"
        size="lg"
        isRound
        colorScheme="red"
      />
      <IconButton
        icon={<FaHandshake />}
        aria-label="Handshake"
        variant="ghost"
        size="lg"
        isRound
        colorScheme="pink"
      />
      <IconButton
        icon={<FaHeart />}
        aria-label="Heart"
        variant="ghost"
        size="lg"
        isRound
        colorScheme="pink"
      />
      <IconButton
        icon={<FaComment />}
        aria-label="Comment"
        variant="ghost"
        size="lg"
        isRound
        colorScheme="pink"
      />
    </Flex>
  );
};

export default MobileMenu;