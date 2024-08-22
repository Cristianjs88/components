import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  Button,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Bg from  '../icons/Bg.jpeg';
const AvailableCameras = () => {
  const [cameras, setCameras] = useState([
    {
      id: 1,
      nombre: "Cámara Norte",
      ubicacion: "Pichulemu, Zona 1",
      imagenPrevia: "/icons/bg.jepg",
    },
    {
      id: 2,
      nombre: "Cámara Sur",
      ubicacion: "Las Araucarias",
      imagenPrevia: "/images/camara_sur.jpg",
    },
  ]);

  const handleCameraClick = (camera) => {
    console.log(`Cámara seleccionada: ${camera.nombre}`);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={6}
      bg="gray.700"
      color="gray"
    >
      <Heading size="md" mb={4}>
        Cámaras Disponibles
      </Heading>
      <SimpleGrid columns={1} spacing={4}>
        {/* Usa SimpleGrid con una columna para filas */}
        {cameras.map((camera) => (
          <Box
            key={camera.id}
            borderWidth="1px"
            borderRadius="sm"
            p={2}
            textAlign="center"
            _hover={{ bg: "gray.600" }}
            cursor="pointer"
          >
            <Box maxW="100px" maxH="100px" mx="auto" mb={2}> {/* Ajusta el tamaño máximo de la imagen */}
              <Image
                src={Bg}
                alt={camera.nombre}
                borderRadius="sm"
                w="80%" // Ajusta la imagen al ancho del contenedor
                h="80%" // Ajusta la imagen al alto del contenedor
                objectFit="cover" // Asegura que la imagen cubra todo el contenedor
              />
            </Box>
            <Text fontWeight="bold" fontSize="sm">
              {camera.nombre}
            </Text>
            <Text>{camera.ubicacion}</Text>
            <Button mt={2} size="sm" onClick={() => handleCameraClick(camera)}>
              Ver cámara
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AvailableCameras;