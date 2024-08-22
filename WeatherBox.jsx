import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import WindIcon from "../icons/Wind.svg";
import HumidityIcon from "../icons/Humidity.svg";
import CloudIcon from "../icons/Cloud.svg";
import SunnyIcon from "../icons/Sunny.svg";
import RainIcon from "../icons/Rain.svg";

const WeatherIcon = ({ weatherDescription }) => {
  let icon = "Icono del clima";
  switch (weatherDescription.toLowerCase()) {
    case "cielo despejado":
    case "cielo claro":
      icon = SunnyIcon;
      break;
    case "nubes":
    case "nublado":
    case "parcialmente nublado":
    case "muy nuboso":
    case "nubes dispersas":
      icon = CloudIcon;
      break;
    case "tormenta":
    case "lluvia":
    case "lluvia ligera":
    case "lluvia moderada":
    case "lluvia de gran intensidad":
      icon = RainIcon;
      break;
    default:
      icon = "Icono del clima"; // Icono por defecto
  }
  return (
    <Box as="img" src={icon} alt="Icono del clima" w={10} h={10} fill="white" />
  );
};

const WeatherBox = ({ bgColor, latitude, longitude }) => {
  const textColor = useColorModeValue("white", "white");
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "a6e0ef954a57bf8464f0d71424777dbc";

  useEffect(() => {
    if (latitude && longitude) {
      const fetchWeather = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=es`
          );
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.error("Error al obtener datos del clima:", error);
        }
      };
      fetchWeather();
    }
  }, [latitude, longitude]);

  if (!weatherData) {
    return <p>Cargando información del clima...</p>;
  }

  return (
    <Box
      bg={"#2A3140"}
      borderRadius="md"
      padding={4}
      shadow="md"
      color={textColor}
      h="95%"
    >
      <Flex justifyContent="space-between" alignItems="center" fontSize="sm">
        <Heading size="sm">
          {new Date(weatherData.dt * 1000)
            .toLocaleDateString("es-ES", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })
            .replace(/^./, (str) => str.toUpperCase())}
        </Heading>
        <Box></Box>
      </Flex>
      <Flex justifyContent="left" alignItems="center" mt={5}>
        <Flex alignItems="center" mr={4} gap={2}>
          <Heading size="2xl">{Math.round(weatherData.main.temp)}° </Heading>
          <WeatherIcon
            weatherDescription={weatherData.weather[0].description}
          />
        </Flex>
        <Text fontSize="sm" ml={12}>
          {weatherData.weather[0].description === "nubes"
            ? "Parcialmente nublado"
            : weatherData.weather[0].description === "nublado"
            ? "Nublado"
            : weatherData.weather[0].description}
        </Text>
      </Flex>
      <Flex justifyContent="right" alignItems="center" gap={2}>
        <Flex direction="column" alignItems="center">
          <Image src={WindIcon} alt="Icono de viento" w={8} h={8} mt={1} />
          <Text>{weatherData.wind.speed} km/h</Text>
        </Flex>
        <Flex direction="column" alignItems="center" justifyContent="right">
          <Image src={HumidityIcon} alt="Icono de humedad" w={8} h={8} mt={1} />
          <Text>{weatherData.main.humidity}%</Text>
        </Flex>
      </Flex>

      <Text fontSize="sm" color="gray.400" mt={2}>
        {weatherData.name}
      </Text>
    </Box>
  );
};

export default WeatherBox;
