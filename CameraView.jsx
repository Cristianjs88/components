import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Image,
  Badge,
  VStack,
  HStack,
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { FaShieldAlt, FaWarehouse } from "react-icons/fa";

const CameraView = () => {
  const [cameraData, setCameraData] = useState({
    nombre: "Cámara norte 2",
    detections: [
      {
        // Add detection data here
      },
    ],
  });

  const videoRef = useRef(null);

  // Simulated camera data
  const [cameras, setCameras] = useState([
    {
      id: 1,
      nombre: "Cámara norte 1",
      ubicacion: "Las Araucarias",
      imagenPrevia:
        "https://images.unsplash.com/photo-1518770688447-f5a9e10c7627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      riesgo: 20,
      estado: "Disponible",
    },
    {
      id: 2,
      nombre: "Cámara norte 2",
      ubicacion: "Las Araucarias",
      imagenPrevia:
        "https://images.unsplash.com/photo-1518770688447-f5a9e10c7627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      riesgo: 90,
      estado: "Disponible",
    },
    {
      id: 3,
      nombre: "Cámara sur 1",
      ubicacion: "Las Araucarias",
      imagenPrevia:
        "https://images.unsplash.com/photo-1518770688447-f5a9e10c7627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      riesgo: 0,
      estado: "No disponible",
    },
    {
      id: 4,
      nombre: "Cámara este 1",
      ubicacion: "Las Araucarias",
      imagenPrevia:
        "https://images.unsplash.com/photo-1518770688447-f5a9e10c7627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      riesgo: 20,
      estado: "Disponible",
    },
  ]);

  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      p={4}
      bg="gray.800"
      color="white"
    >
      <Box w="100%" mb={4}>
        <Heading size="lg">{cameraData ? cameraData.nombre : ""}</Heading>
      </Box>

      <Flex direction="row" w="100%" h="100%" gap={4}>
        {/* Video Container */}
        <Box
          flex="1"
          borderRadius="md"
          borderWidth="1px"
          borderColor="gray.600"
          bg="gray.700"
          p={4}
        >
          <Box mb={4}>
            <Image
              src="/mnt/data/incendioforestal.gif"
              alt="Fire detection"
              borderRadius="md"
            />
          </Box>
          <HStack spacing={4}>
            <Button
              colorScheme="gray"
              variant="outline"
              leftIcon={<FaShieldAlt />}
            >
              Revisar grabación
            </Button>
            <Button
              colorScheme="green"
              variant="solid"
              leftIcon={<FaWarehouse />}
            >
              Reportar
            </Button>
          </HStack>
        </Box>

        {/* Available Cameras */}
        <Box
          w="300px"
          borderRadius="md"
          borderWidth="1px"
          borderColor="gray.600"
          bg="gray.700"
          p={4}
        >
          <Heading size="md" mb={4}>
            Cámaras disponibles
          </Heading>
          <VStack spacing={4}>
            {cameras.map((camera) => (
              <Box
                key={camera.id}
                w="100%"
                p={4}
                bg="gray.600"
                borderRadius="md"
                borderWidth="1px"
                borderColor="gray.500"
              >
                <HStack justifyContent="space-between" mb={2}>
                  <Text fontWeight="bold">{camera.nombre}</Text>
                  <Badge
                    colorScheme={
                      camera.riesgo < 30
                        ? "green"
                        : camera.riesgo < 70
                        ? "yellow"
                        : "red"
                    }
                  >
                    {camera.riesgo}%
                  </Badge>
                </HStack>
                <Text mb={2}>{camera.ubicacion}</Text>
                <Image
                  src={camera.imagenPrevia}
                  alt={camera.nombre}
                  borderRadius="md"
                  mb={2}
                />
                <Button
                  w="100%"
                  colorScheme={
                    camera.riesgo < 30
                      ? "green"
                      : camera.riesgo < 70
                      ? "yellow"
                      : "red"
                  }
                >
                  {camera.estado === "Disponible"
                    ? `Riesgo ${
                        camera.riesgo < 30
                          ? "bajo"
                          : camera.riesgo < 70
                          ? "medio"
                          : "alto"
                      }`
                    : camera.estado}
                </Button>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CameraView;
