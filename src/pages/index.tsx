import { Box, Center, Divider, useBreakpointValue } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Banner from "../components/Banner";
import CTA from "../components/CTA";
import Header from "../components/Header";
import SectionTrips from "../components/SectionTrips";

import { ContinetType } from "../components/CTA/Slide";
import ContinentCopy from "../components/Banner/ContinentCopy";

interface ContinentType extends ContinetType {}

const Home: NextPage<{ continents: ContinentType[] }> = ({ continents }) => {
  return (
    <>
      <Header isHome />
      <Banner
        backgroundImagePath="/Background.png"
        backgroundPosition="top"
        backgroundSize={["cover", "auto"]}
      >
        <ContinentCopy />
      </Banner>
      <SectionTrips />
      <Center>
        <Divider mt={["8", "20"]} borderColor="gray.700" w={["60px", "28"]} />
      </Center>
      <CTA continents={continents} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("http://localhost:3001/continents");
  const data = await response.json();

  return {
    props: { continents: data },
    revalidate: 60 * 24,
  };
};
