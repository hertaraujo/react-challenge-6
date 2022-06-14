import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Flex,
  VStack,
} from "@chakra-ui/react";
// import Image from "next/image";

export type cityPlusHundred = {
  city: string;
  imageUrl: string;
  flagUrl: string;
  country: string;
};

interface CitiesPHProps {
  citiesPlusHundred: cityPlusHundred[];
}

function CitiesPlusHundred({ citiesPlusHundred }: CitiesPHProps) {
  return (
    <>
      <Heading textAlign="initial" fontSize={["24", "36"]} fontWeight="medium">
        Cidades +100
      </Heading>
      <SimpleGrid
        mt={["5", "10"]}
        columns={5}
        gap={["20px", "45px"]}
        gridTemplateColumns={["256px", "280px"]}
        justifyContent="center"
        minChildWidth="250px"
      >
        {citiesPlusHundred.map((city) => (
          <Box key={Math.random()} borderRadius="6" overflow="hidden">
            <Box
              minHeight="170px"
              backgroundImage={`url(${city.imageUrl})`}
              backgroundSize="cover"
              backgroundPosition="center center"
              backgroundRepeat="no-repeat"
            />
            <Flex
              p="24px"
              align="center"
              justify="space-between"
              bg="#fff"
              border="1px solid rgba(255, 186, 8, 0.5)"
              borderTop="none"
            >
              <Flex gap="12px" direction="column">
                <Text fontWeight="semibold" fontSize="20px" color="#47585B">
                  {city.city}
                </Text>
                <Text fontWeight="medium" fontSize="16px" color="#999">
                  {city.country}
                </Text>
              </Flex>
              <Box
                h="30px"
                w="30px"
                borderRadius="full"
                backgroundImage={`url(${city.flagUrl})`}
                backgroundSize="cover"
                backgroundPosition="center center"
                backgroundRepeat="no-repeat"
              />
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

export default CitiesPlusHundred;
