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
  isNextShowComponets?: boolean;
  isLoop?: boolean;
  className?: string;
}
const NewCarousel = ({
  images,
  isAutoPlay,
  pictureClassName,
  isPrevNextBtn,
  isNextShowComponets,
  isLoop,
  className
}: NewCarouselProps) => {

  return (
    <Carousel
      className={cn("flex justify-center items-center relative", className)}
      opts={{
        loop: isLoop,
      }}
      plugins={[Autoplay({ delay: 3000, active: isAutoPlay  })]}
    >
      <CarouselContent className="max-h-[1080px] w-full">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className={cn(
              "flex justify-center items-center content-center basis-auto overflow-hidden"
            )}
          >
            <Image
              src={image}
              alt="demo_image"
              className={cn(pictureClassName)}
              width={1920}
              height={1920}
              priority
            />
          </CarouselItem>
        ))}
        {isNextShowComponets && (
          <CarouselItem
            className={cn(
              "flex justify-center text-center items-center basis-auto overflow-hidden"
            )}
          >
            <div className={cn("relative", pictureClassName)}>
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
          <CarouselPrevious className="absolute left-0 h-full w-[110px] rounded-none border-y-0 bg-gray100 border-black hover:bg-black hover:text-gray100" />
          <CarouselNext className="absolute right-0 h-full w-[110px] rounded-none border-y-0 bg-gray100 border-black hover:bg-black hover:text-gray100" />
        </>
      ): <></>}
    </Carousel>
  );
};

export default NewCarousel;
