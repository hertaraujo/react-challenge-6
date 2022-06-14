import { Box, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Slide from "./Slide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ContinetType } from "./Slide";

interface ContinentType extends ContinetType {}

interface CTAProps {
  continents: ContinentType[];
}

function CTA({ continents }: CTAProps) {
  return (
    <>
      <Heading
        fontSize={["xl", "4xl"]}
        fontWeight="medium"
        textAlign="center"
        lineHeight={["30px", "54px"]}
        my={["6", "14"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <Box mb="12">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {continents.map((continent) => (
            <SwiperSlide key={Date.now() + Math.random()}>
              <Slide
                id={continent.id}
                description={continent.description}
                heading={continent.heading}
                url={continent.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default CTA;
