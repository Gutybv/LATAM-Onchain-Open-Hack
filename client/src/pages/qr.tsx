import {
    Box,
    Button,
    Center,
    Text,
    IconButton,
    Image,
    Flex,
  } from "@chakra-ui/react";
  import { FaArrowLeft } from "react-icons/fa";
import { NextPage } from "next";
import Link from "next/link";


const Qr: NextPage = () => {


  return (
    <Box
    h="100vh"
    bg="#1652F0"
    position="relative"
    color="white"
    overflow="hidden"
  >
    {/* Icono de retroceso */}
    <IconButton
      icon={<FaArrowLeft />}
      aria-label="Go back"
      variant="ghost"
      color="white"
      position="absolute"
      top="4"
      left="4"
      zIndex="1"
      as={Link}
      href={'/'}
    />
    {/* Fondo con curvas */}
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      opacity="0.1"
      backgroundImage="url('https://www.transparenttextures.com/patterns/paper-fibers.png')" // Puedes reemplazar esto con una imagen o patrón de fondo adecuado
    />
    {/* Contenido principal */}
    <Center h="80%">
      <Box textAlign="center">
        {/* Imagen del código QR */}
        <Image
          src="qr.png" // Reemplazar con la URL del código QR
          alt="QR Code"
          boxSize="200px"
          borderRadius="md"
          mb="4"
        />
        {/* Instrucciones */}
        <Text fontWeight="bold" fontSize="lg">
          Align QR Code within frame to scan
        </Text>
      </Box>
    </Center>
    {/* Botón de escanear */}
    <Flex justify="center" mb="8">
      <Button
        size="lg"
        colorScheme="whiteAlpha"
        bg="white"
        color="#1652F0"
        borderRadius="full"
        px="8"
        shadow="lg"
      >
        Scan item
      </Button>
    </Flex>
  </Box>
  );
};

export default Qr;
