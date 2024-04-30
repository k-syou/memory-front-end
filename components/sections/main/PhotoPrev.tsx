import Container from "@/components/atoms/Container";
import NewCarousel from "@/components/atoms/NewCarousel";
import Section from "@/components/atoms/Section";
import React from "react";

const imagePaths: Array<string> = []
for (let i=1; i<10; i++) {
  imagePaths.push(`/images/photos/메인 하단${i}.png`)
}

const PhotoPrev = () => {
  return (
    <Section className="pb-[139px]">
      <Container className="h-auto">
        <NewCarousel
          images={imagePaths}
          pictureClassName="h-[441px] sm:h-[193px] w-auto border-x"
          isAutoPlay
          isLoop
        />
      </Container>
    </Section>
  );
};

export default PhotoPrev;
