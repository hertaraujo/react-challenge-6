import { Flex, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Link from "next/link";
import ArrowPrev from "../../assets/arrowPrev";
import Logo from "./Logo";

interface HeaderProps {
  isHome?: boolean;
}

function Header({ isHome = false }: HeaderProps) {
  return (
    <Flex align="center" justify="center" h={["50px", "100px"]} pos="relative">
      {!isHome && (
        <Link href="/">
          <ChakraLink
            pos="absolute"
            top={["35%", "40%"]}
            left={["5%", "5%", "10%"]}
          >
            <Icon as={ArrowPrev} h={["16px", "24px"]} w={["16px", "24px"]} />
          </ChakraLink>
        </Link>
      )}
      <Logo />
    </Flex>
  );
}

export default Header;

export const getStaticProps: GetStaticProps = () => {
  return { props: {} };
};
