import {
  Box,
  Center,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import BuildingIcon from "../../assets/building";
import CocktailIcon from "../../assets/cocktail";
import EarthIcon from "../../assets/earth";
import MuseumIcon from "../../assets/museum";
import SurfIcon from "../../assets/surf";

function SectionTrips() {
  const trips = [
    { icon: CocktailIcon, text: "vida noturna" },
    { icon: SurfIcon, text: "praia" },
    { icon: BuildingIcon, text: "moderno" },
    { icon: MuseumIcon, text: "clássico" },
    { icon: EarthIcon, text: "e mais..." },
  ];

  const variant = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
  });

  return (
    <SimpleGrid
      mt={["8", "28"]}
      mx={["10", "32"]}
      columnGap={["0px", "28"]}
      rowGap={["6", "16"]}
      columns={[3, 5]}
      minChildWidth={["60px", "130px"]}
    >
      {!variant &&
        trips.map((trip) => (
          <Flex
            direction="column"
            justify="space-between"
            align="center"
            key={Math.random() + Date.now()}
            minHeight="36"
          >
            <Icon as={trip.icon} />
            <Text fontSize="1.4rem" fontWeight="semibold">
              {trip.text}
            </Text>
          </Flex>
        ))}
      {variant &&
        trips.map((trip, i) => (
          <Box
            key={Math.random()}
            justifySelf={
              i % 2 !== 0 && i !== 4 ? "end" : i === 4 ? "center" : ""
            }
            gridColumn={
              i % 2 === 0 && i !== 4 ? "1 / 3" : i === 4 ? "1 / 4" : ""
            }
          >
            <div
              style={{
                display: "inline-block",
                height: "8px",
                width: "8px",
                borderRadius: "100%",
                backgroundColor: "#FFBA08",
                margin: "1px 8px 0 0",
              }}
            />
            <span
              style={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {trip.text}
            </span>
          </Box>
        ))}
    </SimpleGrid>
  );
}

export default SectionTrips;
