import {
  Flex,
  Box,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  Heading,
  Spacer,
  VStack,
  Switch,
  useColorMode,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  SettingsIcon,
  BellIcon,
} from '@chakra-ui/icons';
import IronFireL from  '../icons/IronFireL.svg';
const TopBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('gray.600', 'gray.900');
  const textColor = useColorModeValue('white', 'gray.300');
  const iconColor = useColorModeValue('white', 'gray.500');
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      align="center"
      h="100vh"
      w="50px"
      bg={bgColor}
      shadow="md"
      p={2}
      borderRadius="xl"
      position="relative"
      boxShadow="lg"
    >
      {/* Logo/Icono de la Aplicación */}
      <Box as="img" src={IronFireL}            
            w={8}
            h={6}
            fill={textColor}
            
          >{/* ... tu código SVG para el termómetro ... */}</Box>
      

      {/* Sección de Usuario (Ajustes, Notificaciones, Switch) */}
      <VStack spacing={6} align="center">
        
      <Spacer />
        <IconButton icon={<SettingsIcon />} aria-label="Settings" size="sm" variant="ghost" color={iconColor} />
        
      
        <IconButton icon={<BellIcon />} aria-label="Notifications" size="sm" variant="ghost" color={iconColor} />
       
        <Spacer />
        <Spacer />
       
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} size="sm" />
      </VStack>

      <Spacer />

      {/* Botón de Menú (para dispositivos móviles) */}
      <IconButton
        size="md"
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        onClick={onOpen}
        display={{ base: 'block', md: 'none' }}
        position="absolute"
        bottom={4}
        left="50%"
        transform="translateX(-50%)"
        color={textColor}
      />

      {/* Cajón Lateral (Drawer) para el menú de navegación móvil */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menú</DrawerHeader>
          <DrawerBody>
            {/*  ... (Aquí puedes agregar los elementos del menú si es necesario) ... */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default TopBar;