import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import CitiesPlusHundred from "../../components/CitiesPlusHundred";
import Header from "../../components/Header";

import { cityPlusHundred } from "../../components/CitiesPlusHundred";
import Banner from "../../components/Banner";
import {
  Box,
  Center,
  Flex,
  Heading,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";

export interface ContinentInterface {
  id: number;
  url: string;
  languages: number;
  heading: string;
  description: string;
  continentCopy: string;
  countries: number;
  language: number;
  citiesPlusHundred: cityPlusHundred[];
  cititesPlusHundredTotal: number;
}

const Continent: NextPage<ContinentInterface> = ({
  citiesPlusHundred,
  cititesPlusHundredTotal,
  continentCopy,
  countries,
  description,
  heading,
  languages,
  url,
}) => {
  return (
    <>
      <Header />
      <Banner
        backgroundImagePath={url}
        backgroundSize="cover"
        backgroundPosition="center center"
        textShadow="1px 1px 15px #555"
      >
        <Center h={["150px", "500px"]} pos="relative">
          <Heading
            pos={["relative", "absolute"]}
            fontSize={["28px", "5xl"]}
            fontWeight="semibold"
            color="white"
            left={["", "10%"]}
            bottom={["", "12%"]}
          >
            {heading}
          </Heading>
        </Center>
      </Banner>
      <Flex
        as="article"
        maxW="1160px"
        direction="column"
        align="center"
        margin="0 auto"
        mt={["8", "20"]}
      >
        <Flex direction={["column", "row"]} mx={["16px", ""]}>
          <Text flex="1.1" fontSize={["14px", "24px"]}>
            {continentCopy}
          </Text>
          <Flex
            mt="16px"
            flex="1"
            textAlign="center"
            align="center"
            justify={["space-between", "space-evenly"]}
            fontSize={["18px", "24px"]}
            fontWeight={["medium", "semibold"]}
          >
            <Box>
              <Text
                fontSize={["24px", "48px"]}
                fontWeight="semibold"
                color="#ffba08"
              >
                {countries}
              </Text>
              <Text>países</Text>
            </Box>
            <Box>
              <Text
                fontSize={["24px", "48px"]}
                fontWeight="semibold"
                color="#ffba08"
              >
                {languages}
              </Text>
              <Text>línguas</Text>
            </Box>
            <Box>
              <Text
                fontSize={["24px", "48px"]}
                fontWeight="semibold"
                color="#ffba08"
              >
                {cititesPlusHundredTotal}
              </Text>
              <Text>
                cidades +100
                <Tooltip
                  color="gray"
                  label="fonte: 'https://www.visualcapitalist.com/the-100-most-popular-city-destinations/'"
                >
                  <Tag>&#9432;</Tag>
                </Tooltip>
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Box w={["90%", "100%"]} my={["8", "20"]}>
          <CitiesPlusHundred citiesPlusHundred={citiesPlusHundred} />
        </Box>
      </Flex>
    </>
  );
};

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3001/continents");
  const continents = await res.json();

  return {
    paths: [
      {
        params: continents.reduce(
          (acc: {}, cur: ContinentInterface) => ({
            ...acc,
            continent: String(cur.id),
          }),
          {}
        ),
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:3001/continents/${context.params.continent}`
  );
  const continent = await res.json();

  return { props: continent };
};
