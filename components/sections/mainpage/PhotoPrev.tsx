import Container from "@/components/atoms/Container";
import NewCarousel from "@/components/atoms/NewCarousel";
import Section from "@/components/atoms/Section";
import React from "react";

const PhotoPrev = () => {
  return (
    <Section border={"bottom"}>
      <Container className="h-auto">
        <NewCarousel
          images={[
            "/images/photos/p1.jpg",
            "/images/photos/p2.jpg",
            "/images/photos/p3.jpg",
            "/images/photos/p4.jpg",
            "/images/photos/p5.jpg",
          ]}
          pictureClassName="h-[441px] sm:h-[193px] w-auto"
          isAutoPlay
          isLoop
        />
      </Container>
    </Section>
  );
};

export default PhotoPrev;
