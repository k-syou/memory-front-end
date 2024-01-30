import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

type Props = {
  spaceBetween: number;
  slidesPerView: any;
  navigation: boolean;
  data: Array<any>
};


const ButtonCarousel = (props: Props) => {
  SwiperCore.use([Navigation]);
  const swiperRef = useRef<SwiperCore>();
  
  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      loop={true}
      spaceBetween={props.spaceBetween}
      slidesPerView={props.slidesPerView}
      modules={[Navigation, Scrollbar]}
      navigation={props.navigation}
      autoplay={false}
    >
      {props.data.map((value, idx) => {
        let src = require(`@/public/images/${value}`)
        return (
          <SwiperSlide key={`sslide-${idx}`} className="h-full border-x border-solid border-black">
              <Image src={src} alt="" className="img scale-125"></Image>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default ButtonCarousel;
