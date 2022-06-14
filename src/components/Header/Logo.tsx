import { Icon } from "@chakra-ui/react";
import Image from "next/image";
import logoIcon from "../../assets/Logo.svg";
import LogoIcon from "../../assets/logoIcon";

const styles = {
  width: "100%",
};

function Logo() {
  return (
    <Icon as={LogoIcon} w={["81px", "81px", "184px"]} h={["20px", "46"]} />
  );
  // return <Image style={styles} src={logoIcon} alt="worldtrip logo" />;
}

export default Logo;
