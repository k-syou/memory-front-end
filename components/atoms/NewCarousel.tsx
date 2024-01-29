"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Text from "./Text";

interface NewCarouselProps {
  images: string[];
  isAutoPlay?: boolean;
  pictureClassName: string;
  isPrevNextBtn?: boolean;
  isNextShowComponets?: boolean;
}
const NewCarousel = ({
  images,
  isAutoPlay,
  pictureClassName,
  isPrevNextBtn,
  isNextShowComponets,
}: NewCarouselProps) => {
  return (
    <Carousel
      className="flex justify-center items-center"
      opts={{
        loop: true,
      }}
      plugins={isAutoPlay ? [Autoplay({ delay: 2400 })] : []}
    >
      <CarouselContent className="max-h-[1080px]">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center items-center content-center basis-auto"
          >
            <Image
              src={image}
              alt="demo_image"
              className={cn(pictureClassName)}
              width={1920}
              height={1920}
            />
          </CarouselItem>
        ))}
        {isNextShowComponets && (
          <CarouselItem
            className={cn(
              "flex justify-center text-center items-center basis-auto"
            )}
          >
            <div className={cn("relative",pictureClassName)}>
              <Text
                variant={"web_h5"}
                type="paragraph"
                className={cn(
                  "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
                )}
              >
                👇
                <br />
                앞으로 만들어갈
                <br />
                기억들을 기대해 주세요
              </Text>
            </div>
          </CarouselItem>
        )}
      </CarouselContent>
      {isPrevNextBtn && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};

export default NewCarousel;
