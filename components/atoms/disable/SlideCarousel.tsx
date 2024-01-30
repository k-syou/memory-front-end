"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Text from "../Text";

type Props = {
  spaceBetween: number;
  slidesPerView: any;
  pagination: boolean;
  data: Array<any>;
};

const SlideCarousel = (props: Props) => {
  SwiperCore.use([Pagination]);
  const swiperRef = useRef<SwiperCore>();

  return (
    <Swiper
      // onSwiper={(swiper) => {
      //   swiperRef.current = swiper;
      // }}
      loop={false}
      centeredSlides={true}
      spaceBetween={props.spaceBetween}
      slidesPerView={props.slidesPerView}
      modules={[Pagination]}
      pagination={props.pagination}
      autoplay={true}
    >
      {props.data.map((value, idx) => {
        let src = require(`@/public/images/${value}`);
        return (
          <SwiperSlide
            key={`sslide-${idx}`}
            className="h-full w-auto overflow-hidden"
          >
            <Image
              src={src}
              alt=""
              className="img h-full"
            ></Image>
          </SwiperSlide>
        );
      })}
      <SwiperSlide className="h-full overflow-hidden">
        <div className="flex justify-center text-center h-full">
          <Text variant={"web_h5"} type="paragraph" className="m-auto block">
            👇
            <br />
            앞으로 만들어갈
            <br />
            기억들을 기대해 주세요
          </Text>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideCarousel;
