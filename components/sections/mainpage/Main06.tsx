import Container from "@/components/atoms/Container";
import NewCarousel from "@/components/atoms/NewCarousel";
import SlideCarousel from "@/components/atoms/disable/SlideCarousel";
import React from "react";

const Main06 = () => {
  return (
    <div className="h-auto border-b border-solid border-black w-full box-border">
      <Container variant={"main"} className="h-[500px]">
        <NewCarousel
          images={[
            "/images/photos/p1.jpg",
            "/images/photos/p2.jpg",
            "/images/photos/p3.jpg",
            "/images/photos/p4.jpg",
            "/images/photos/p5.jpg",
          ]}
          pictureClassName="h-[500px] w-auto"
          isAutoPlay
        />
      </Container>
    </div>
  );
};

export default Main06;
