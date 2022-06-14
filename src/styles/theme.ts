import { extendTheme, Theme } from "@chakra-ui/react";

const customTheme = {
  config: {
    initialColorMode: "system",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        maxWidth: "1440px",
        margin: "0 auto",
        background: "#F5F8FA",
        color: "#47585B",
      },
    },
  },
};

export const theme = extendTheme(customTheme);
