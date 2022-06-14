import { Box, BoxProps } from "@chakra-ui/react";

interface BannerProps extends BoxProps {
  backgroundImagePath: string;
  children: React.ReactElement;
}

function Banner({ children, backgroundImagePath, ...rest }: BannerProps) {
  return (
    <Box
      backgroundImage={`url(${backgroundImagePath})`}
      backgroundRepeat="no-repeat"
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Banner;
