import Container from "@/components/atoms/Container";
import NewCarousel from "@/components/atoms/NewCarousel";
import Title from "@/components/atoms/Title";
import React from "react";

const Main04 = () => {
  return (
    <>
      <Title
        isUnderLine
        className="pb-[52px] pt-[198px]"
        text="우리가 만든 기억이에요"
        align="text-center"
      />
      <div className="h-auto border-b border-solid border-black w-full box-border">
        <Container variant={"main"} className="h-[752px]">
          <NewCarousel
            images={["/images/posters/p1.jpg", "/images/posters/p2.png"]}
            pictureClassName="w-[536px] h-[752px] border-x border-solid border-black"
            isNextShowComponets
          />
        </Container>
      </div>
    </>
  );
};

export default Main04;
