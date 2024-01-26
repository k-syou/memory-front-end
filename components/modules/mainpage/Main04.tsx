import Container from "@/components/atoms/Container";
import SlideCarousel from "@/components/atoms/SlideCarousel";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import React from "react";

const Main04 = () => {
  return (
    <>
      <Title
        isUnderLine
        className="pb-[52px] pt-[198px]"
        text="우리가 만든 기억이에요"
        align="center"
      />
      <div className="h-auto border-b border-solid border-black w-full box-border">
        <Container variant={"main"} className="h-[752px]">
          <SlideCarousel
            data={["posters/p1.jpg", "posters/p2.png"]}
            slidesPerView={3}
            pagination={false}
            spaceBetween={32}
          />
        </Container>
      </div>
    </>
  );
};

export default Main04;
