"use client";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import React, { useRef, useState } from "react";
import ButtonCarousel from "@/components/atoms/disable/ButtonCarousel";
import NewCarousel from "@/components/atoms/NewCarousel";
import Button from "@/components/atoms/Button";

const photoData = [
  "/images/actors/프사_지은.png",
  "/images/actors/프사_혁진.png",
  "/images/actors/프사_영민.png",
  "/images/actors/프사_지은.png",
  "/images/actors/프사_혁진.png",
  "/images/actors/프사_영민.png",
  "/images/actors/프사_지은.png",
  "/images/actors/프사_혁진.png",
  "/images/actors/프사_영민.png",
]

const Main03 = () => {
  return (
    <div className="h-auto border-b border-solid border-black w-full box-border pt-[188px]">
      <Container variant={"main"}>
        <div className="flex justify-between items-center mb-[56px]">
          <Text type="paragraph" variant={"web_h3"} className="">
            우리를 소개할게요
          </Text>
          <Button variant={"navbarBtn"}><Text type="paragraph" variant={"web_h6"}>전체 보기</Text></Button>
        </div>
      </Container>
      <div className="h-auto border-b border-solid border-black w-full box-border "></div>

      {/* swiper */}

      <Container variant={"main"} className="relative h-[345px]">
        <NewCarousel 
          images={photoData}
          pictureClassName="h-[345px] w-[252px] border-x border-solid border-black"
          isPrevNextBtn
          isAutoPlay
          isLoop
        />

        {/* <ButtonCarousel
          spaceBetween={32}
          slidesPerView={5}
          navigation={true}
          data={photoData}
        /> */}
      </Container>
    </div>
  );
};

export default Main03;
