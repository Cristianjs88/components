import React from "react";
import { Box, Container } from "@chakra-ui/react";

const WindyWidget = () => {
  return (
    <Container
      maxW="md" // Ajusta el ancho máximo del contenedor
      centerContent // Centra el contenido horizontalmente
      mt={4} // Agrega margen superior
      md={4}
      borderRadius="full"
    >
      <Box
        id="windy-weather"
        width="120%"
        height="210px"
        bg="gray.300" // Color de fondo del widget
      >
        {/* Agrega un iframe para el widget de Windy */}
        <iframe
          src="https://embed.windy.com/embed.html?type=forecast&location=coordinates&detail=true&detailLat=-33.44611614534658&detailLon=-70.64374916550658&metricTemp=default&metricRain=default&metricWind=default"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Windy Weather Widget"
        ></iframe>
      </Box>
    </Container>
  );
};

export default WindyWidget;
