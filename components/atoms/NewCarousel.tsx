"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Text from "./Text";
import Autoplay from "embla-carousel-autoplay";

interface NewCarouselProps {
  images: string[];
  isAutoPlay?: boolean;
  pictureClassName: string;
  isPrevNextBtn?: boolean;
  isNextShowComponents?: boolean;
  isLoop?: boolean;
  className?: string;
}
const NewCarousel = ({
  images,
  isAutoPlay,
  pictureClassName,
  isPrevNextBtn,
  isNextShowComponents,
  isLoop,
  className,
}: NewCarouselProps) => {
  return (
    <Carousel
      className={cn(
        "flex justify-center items-center relative w-[1260px] mx-auto",
        className
      )}
      opts={{
        loop: isLoop,
        align: "center",
      }}
      plugins={[Autoplay({ delay: 3000, active: isAutoPlay })]}
    >
      <CarouselContent className="-ml-0">
        {images.map((image, index) => {
          return (
            <CarouselItem
              key={index}
              className={cn(
                "flex justify-center items-center content-center basis-auto overflow-hidden px-2"
              )}
            >
              <Image
                src={image}
                alt="demo_image"
                className={cn(pictureClassName)}
                width={1920}
                height={1920}
              />
            </CarouselItem>
          );
        })}
        {isNextShowComponents && (
          <CarouselItem
            className={cn(
              "flex justify-center text-center items-center basis-auto overflow-hidden"
            )}
          >
            <div className={cn("relative border border-grad2-1", pictureClassName)}>
              <Text
                type="paragraph"
                className={cn(
                  "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-h6 sm:text-caption"
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
      {isPrevNextBtn ? (
        <>
          <CarouselPrevious className="h-[72px] w-[72px] bg-point text-white border-0 hover:bg-sub1 left-[-90px]" />
          <CarouselNext className="h-[72px] w-[72px] bg-point text-white border-0 hover:bg-sub1 right-[-90px]" />
          {/* <CarouselPrevious className="absolute left-0 h-full w-[110px] md:w-[58px] rounded-none border-y-0 bg-gray100 border-black hover:bg-black hover:text-gray100" />
          <CarouselNext className="absolute right-0 h-full w-[110px] md:w-[58px] rounded-none border-y-0 bg-gray100 border-black hover:bg-black hover:text-gray100" /> */}
        </>
      ) : (
        <></>
      )}
    </Carousel>
  );
};

export default NewCarousel;
