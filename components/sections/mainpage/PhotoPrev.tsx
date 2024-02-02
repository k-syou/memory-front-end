import Container from "@/components/atoms/Container";
import NewCarousel from "@/components/atoms/NewCarousel";
import React from "react";

const PhotoPrev = () => {
  return (
    <div className="h-auto sm:border-b sm:border-solid sm:border-black w-full box-border">
      <Container className="sm:h-[500px] h-[193px]">
        <NewCarousel
          images={[
            "/images/photos/p1.jpg",
            "/images/photos/p2.jpg",
            "/images/photos/p3.jpg",
            "/images/photos/p4.jpg",
            "/images/photos/p5.jpg",
          ]}
          pictureClassName="sm:h-[500px] h-[193px] w-auto"
          isAutoPlay
        />
      </Container>
    </div>
  );
};

export default PhotoPrev;
