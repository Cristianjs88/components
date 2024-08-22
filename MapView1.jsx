import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const MapView1 = () => {
  // Chakra UI color mode aware colors
  const primaryColor = useColorModeValue("gray.800", "white");
  const secondaryColor = useColorModeValue("white", "gray.800");
  const accentColor = useColorModeValue("teal.500", "teal.200");

  return (
    <Flex h="100vh" w="100vw" bg={primaryColor}>
      {/* Left Section: Map */}
      <Box w="60%" p={4}>
        {/* Map Area */}
        <Box
          bg={secondaryColor}
          borderRadius="lg"
          boxShadow="md"
          p={4}
          mb={4}
          position="relative"
        >
          {/* Map Image Placeholder */}
          <Box
            bg="gray.300"
            h="600px"
            borderRadius="lg"
            position="relative"
            overflow="hidden"
          >
            {/* Add your map image here */}
            <Image
              src="https://via.placeholder.com/800x600" // Replace with your map image
              alt="Map"
              objectFit="cover"
              w="100%"
              h="100%"
            />
            {/* Map Overlays - Customize with your data */}
            <Box
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              // Add your map overlays and logic here
            >
              {/* Example: Zone of Risk */}
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="200px"
                h="300px"
                bg="red.500"
                opacity="0.5"
                borderRadius="lg"
              ></Box>
              {/* ... More overlays */}
            </Box>
          </Box>
          {/* Map Controls */}
          <Flex
            direction="column"
            position="absolute"
            top="20px"
            right="20px"
            spacing={4}
          >
            {/* Add map control buttons here using IconButton */}
          </Flex>
        </Box>
        {/* Map Legend and Filters */}
        <Box>
          {/* Legend - Customize with your legend items */}
          <Flex alignItems="center" mb={2}>
            <Box
              w="10px"
              h="10px"
              bg="red.500"
              borderRadius="full"
              mr={2}
            ></Box>
            <Text fontSize="sm">Zona de riesgo</Text>
          </Flex>
          {/* ...More Legend items */}
          {/* Filters - Add your filter buttons here */}
          <Stack direction="row" spacing={4}>
            <Button variant="outline" size="sm">
              Radar
            </Button>
            {/* ... More filter buttons */}
          </Stack>
        </Box>
      </Box>

      {/* Right Section: Camera Views */}
      <Box w="40%" p={4} overflowY="auto">
        {/* Camera View Title */}
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Camara Norte 2
        </Text>

        {/* Camera Feed - Replace placeholder with actual feed */}
        <Box bg={secondaryColor} borderRadius="lg" boxShadow="md" mb={4}>
          <Image
            src="https://via.placeholder.com/600x400" // Replace with camera feed
            alt="Camera Feed"
            borderRadius="lg"
          />
        </Box>

        {/* Camera Options */}
        <Flex justify="space-between" mb={4}>
          <Button variant="outline" size="sm">
            Revisar grabación
          </Button>
          <Button colorScheme="green" size="sm">
            Reportar
          </Button>
        </Flex>

        {/* Available Cameras List */}
        <Box>
          <Text fontSize="md" fontWeight="semibold" mb={2}>
            Cámaras disponibles
          </Text>
          {/* Camera Card - Create a component and map over your camera data */}
          <CameraCard
            name="Cámara norte 1"
            location="Las Araucarias"
            risk="20%"
            riskLevel="Riesgo bajo"
            imageUrl="https://via.placeholder.com/200x100"
          />
          {/* ...More camera cards */}
        </Box>
      </Box>
    </Flex>
  );
};

// Camera Card Component
const CameraCard = ({ name, location, risk, riskLevel, imageUrl }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      p={4}
      mb={2}
      // Add onClick or other event handlers here
    >
      <Flex justify="space-between" align="center">
        <Box>
          <Text fontSize="sm" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {location}
          </Text>
        </Box>
        <Box>
          <Text fontSize="xs" color="gray.500">
            {risk}
          </Text>
          <Text
            fontSize="xs"
            color={riskLevel === "Riesgo alto" ? "red.500" : "green.500"}
          >
            {riskLevel}
          </Text>
        </Box>
      </Flex>
      <Image src={imageUrl} alt={name} mt={2} borderRadius="lg" />
    </Box>
  );
};

export default MapView1;
