import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Grid,
  GridItem,
  Image,
  VStack,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaCamera,
  FaShieldAlt,
  FaWind,
  FaCloud,
  FaTemperatureHigh,
  FaWater,
  FaExpandArrowsAlt,
  FaCompass,
  FaPlus,
  FaMinus,
  FaWarehouse,
} from "react-icons/fa";
import imagenPrueba from "../icons/Mapa1.png"; // Reemplaza con la ruta de tu imagen

const MapView = () => {
  const [zoomLevel, setZoomLevel] = useState(10); // Nivel de zoom inicial
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Estado del menú lateral
  const { isOpen, onOpen, onClose } = useDisclosure(); // Estado del menú superior

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 1);
  };

  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 1);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleMenu = () => {
    onOpen();
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      bg="gray.700"
      color="white"
      w="100%"
    >
      <Heading size="md" mb={4}>
        Las Araucarias
      </Heading>

      {/* Contenedor de la imagen */}
      <Box
        position="relative"
        w="100%"
        h="350px"
        bg="gray.700"
        borderRadius="md"
        overflow="hidden"
      >
        <Image
          src={imagenPrueba}
          alt="Mapa de prueba"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        {/* Botones superpuestos en la imagen */}
        <Flex position="absolute" top={4} right={4}>
          <IconButton
            aria-label="Zoom in"
            icon={<FaExpandArrowsAlt />}
            onClick={handleZoomIn}
            size="sm"
            variant="ghost"
          />
          <IconButton
            aria-label="Compass"
            icon={<FaCompass />}
            size="sm"
            variant="ghost"
          />
          <IconButton
            aria-label="Menu"
            icon={<FaCamera />}
            onClick={toggleDrawer}
            size="sm"
            variant="ghost"
          />
        </Flex>
        {/* Botones de zoom superpuestos en la imagen */}
        <VStack
          position="absolute"
          bottom={4}
          right={4}
          spacing={2}
          align="center"
        >
          <IconButton
            aria-label="Zoom in"
            icon={<FaPlus />}
            onClick={handleZoomIn}
            size="sm"
            variant="ghost"
          />
          <IconButton
            aria-label="Zoom out"
            icon={<FaMinus />}
            onClick={handleZoomOut}
            size="sm"
            variant="ghost"
          />
        </VStack>
      </Box>

      {/* Botonera inferior */}
      <HStack spacing={4} mt={4}>
        <Button variant="outline" colorScheme="gray" onClick={() => {}}>
          Radar
        </Button>
        <Button variant="outline" colorScheme="gray" onClick={() => {}}>
          Satélite
        </Button>
        <Button variant="outline" colorScheme="gray" onClick={() => {}}>
          Lluvia
        </Button>
        <Button
          variant="solid"
          colorScheme="gray"
          onClick={() => {}}
          fontSize="xs"
        >
          Temperatura
        </Button>
        <Button
          variant="outline"
          colorScheme="gray"
          onClick={() => {}}
          fontSize="xs"
        >
          Viento
        </Button>
        <Button
          variant="outline"
          colorScheme="gray"
          onClick={() => {}}
          fontSize="xs"
        >
          Nubes
        </Button>
      </HStack>

      {/* Menú lateral */}
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={toggleDrawer}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menú</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Button variant="outline" colorScheme="gray" onClick={() => {}}>
                Zona segura
              </Button>
              <Button
                variant="outline"
                colorScheme="gray"
                onClick={() => {}}
                leftIcon={<FaWarehouse />}
              >
                Información
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Menú superior */}
      <Drawer isOpen={isOpen} placement="top" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menú</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Button
                variant="outline"
                colorScheme="gray"
                onClick={() => {}}
                leftIcon={<FaShieldAlt />}
              >
                Zona segura
              </Button>
              <Button
                variant="outline"
                colorScheme="gray"
                onClick={() => {}}
                leftIcon={<FaWarehouse />}
              >
                Información
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MapView;
