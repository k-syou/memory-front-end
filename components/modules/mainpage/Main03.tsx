"use client";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const Main03 = () => {
  SwiperCore.use([Navigation]);
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="h-auto border-b border-solid border-black w-full box-border pt-[188px]">
      <Container variant={"main"}>
        <div className="flex justify-between items-center mb-[56px]">
          <Text type="paragraph" variant={"web_h3"} className="">
            우리를 소개할게요
          </Text>
          <div className="">전체보기</div>
        </div>
      </Container>
      <div className="h-auto border-b border-solid border-black w-full box-border"></div>

      {/* swiper */}

      <Container variant={"main"} className="h-auto relative">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          spaceBetween={32}
          slidesPerView={5}
          modules={[Navigation, Scrollbar]}
          navigation
          autoplay={false}
        >
          <SwiperSlide>
            <div className="h-[345px] bg-black"></div>
          </SwiperSlide>;
          <SwiperSlide>
            <div className="h-[345px] bg-dark-gray"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[345px] bg-medium-gray"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[345px] bg-light-gray"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[345px] bg-black"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[345px] bg-dark-gray"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[345px] bg-medium-gray"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[345px] bg-light-gray"></div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Main03;
