import { Box, useColorModeValue } from '@chakra-ui/react';

const GradientBox = ({ children }) => {
  const bgGradient = useColorModeValue('linear(to-r, grey.500, green.400)', 'linear(to-r, grey.900, green.700)'); 

  return (
    <Box bgGradient={bgGradient} borderRadius="md" shadow="md" w="100%" h="100%">
      {children}
    </Box>
  );
};

export default GradientBox;