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
  isLoop?: boolean;
}
const NewCarousel = ({
  images,
  isAutoPlay,
  pictureClassName,
  isPrevNextBtn,
  isNextShowComponets,
  isLoop,
}: NewCarouselProps) => {
  return (
    <Carousel
      className="flex justify-center items-center relative"
      opts={{
        loop: isLoop
      }}
      plugins={isAutoPlay ? [Autoplay({ delay: 2400 })] : []}
    >
      <CarouselContent className="max-h-[1080px] w-full">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className={cn("flex justify-center items-center content-center basis-auto overflow-hidden")}
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
                variant={"web_h5"}
                type="paragraph"
                className={cn(
                  "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:visible hidden"
                )}
              >
                👇
                <br />
                앞으로 만들어갈
                <br />
                기억들을 기대해 주세요
              </Text>
              <Text
                variant={"web_caption"}
                type="paragraph"
                className={cn(
                  "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:hidden visible"
                )}
              >
                👇
                <br />
                앞으로 만들어갈
                기억들을 기대해 주세요
              </Text>
            </div>
          </CarouselItem>
        )}
      </CarouselContent>
      {isPrevNextBtn && (
        <>
          <CarouselPrevious className="absolute left-0 h-full w-[110px] rounded-none border-y-0 bg-milky-white border-black hover:bg-black hover:text-milky-white" />
          <CarouselNext className="absolute right-0 h-full w-[110px] rounded-none border-y-0 bg-milky-white border-black hover:bg-black hover:text-milky-white"/>
        </>
      )}
    </Carousel>
  );
};

export default NewCarousel;
