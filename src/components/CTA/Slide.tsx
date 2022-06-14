import {
  Center,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

export interface ContinetType {
  id: number;
  url: string;
  heading: string;
  description: string;
}

interface SlideProps extends ContinetType {}

function Slide({ id, description, url, heading }: SlideProps) {
  const variant = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Link href={`continents/${id}`}>
      <Center as="a" cursor="crosshair">
        <Center
          backgroundImage={`url(${url})`}
          backgroundSize="cover"
          backgroundPosition="center center"
          backgroundRepeat="no-repeat"
          height={["250px", "450px"]}
          w={variant ? "100%" : "90%"}
        >
          <Stack
            color="white"
            textAlign="center"
            spacing="4"
            mt="10"
            textShadow="3px 3px 15px black"
          >
            <Heading fontSize={["2xl", "5xl"]}>{heading}</Heading>
            <Text fontWeight="bold" fontSize={["sm", "2xl"]}>
              {description}
            </Text>
          </Stack>
        </Center>
      </Center>
    </Link>
  );
}

export default Slide;
