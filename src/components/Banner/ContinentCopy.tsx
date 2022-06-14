import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import airplane from "../../assets/airplaneIcon";

function ContinentCopy() {
  const variant = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
  });

  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => setIsShowing(!!variant), [variant]);

  return (
    <Stack
      direction="row"
      spacing="12.5rem"
      p={["28px 20px 28px 14px", "28px 20px 28px 14px", "80px 140px 70px"]}
    >
      <Stack
        spacing={["2", "5"]}
        color="white"
        justify=""
        mt={["10px", "20px"]}
      >
        <Heading fontSize={["xl", "xl", "4xl"]} fontWeight="medium">
          5 Continentes,
          <br /> infinitas possibilidades.
        </Heading>
        <Text fontSize={["sm", "sm", "xl"]}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>
      {!isShowing && (
        <Flex as="span" mb="-4" flex="1">
          <Icon as={airplane} />
        </Flex>
      )}
    </Stack>
  );
}

export default ContinentCopy;
