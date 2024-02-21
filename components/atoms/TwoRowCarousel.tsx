"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Text from "./Text";
import Autoplay from "embla-carousel-autoplay";

interface TwoRowCarouselProps {
  images: any[];
  isAutoPlay?: boolean;
  pictureClassName: string;
  isPrevNextBtn?: boolean;
  isNextShowComponents?: boolean;
  isLoop?: boolean;
  className?: string;
}
const TwoRowCarousel = ({
  images,
  isAutoPlay,
  pictureClassName,
  isPrevNextBtn,
  isNextShowComponents,
  isLoop,
  className,
}: TwoRowCarouselProps) => {
  let imageCountList: Array<number>;
  imageCountList = new Array<number>(Math.ceil(images.length / 2));
  for (let index = 0; index < imageCountList.length; index++) {
    imageCountList[index] = index * 2;
  }
  const nextShowComponent = (
    <div className={cn("relative", pictureClassName)} >
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
  );
  let isAddNextShowComponent = !isNextShowComponents;
  const imageItemEls = imageCountList.map((idx) => {
    let colImages;
    if (idx + 1 != images.length) {
      colImages = (
        <>
          <div className={cn(pictureClassName, "overflow-hidden")}>
            {images[idx]}
          </div>
          <div className={cn(pictureClassName, "overflow-hidden")}>
            {images[idx + 1]}
          </div>
        </>
      );
    } else {
      colImages = (
        <>
          <div className={cn(pictureClassName, "overflow-hidden")}>
            {images[idx]}
          </div>
          {!isAddNextShowComponent && isNextShowComponents ? (
            nextShowComponent
          ) : (
            <></>
          )}
        </>
      );
      isAddNextShowComponent = !isAddNextShowComponent;
    }
    return (
      <>
        <CarouselItem
          key={`photo-${idx}`}
          className={cn(
            "flex flex-col items-center content-center basis-auto overflow-hidden gap-4"
          )}
        >
          {colImages}
        </CarouselItem>
        {!isAddNextShowComponent && isNextShowComponents ? (
          <CarouselItem
            key={idx}
            className={cn(
              "flex flex-col items-center content-center basis-auto overflow-hidden gap-4"
            )}
          >
            {nextShowComponent}
          </CarouselItem>
        ) : (
          <></>
        )}
      </>
    );
  });

  return (
    <Carousel
      className={cn("flex justify-center items-center relative", className)}
      opts={{
        loop: isLoop,
      }}
      plugins={[Autoplay({ delay: 3000, active: isAutoPlay })]}
    >
      <CarouselContent className="max-h-[1080px] w-full mx-auto">
        {imageItemEls}
      </CarouselContent>
      {isPrevNextBtn ? (
        <>
          <CarouselPrevious className="absolute left-0 h-full w-[110px] md:w-[58px] rounded-none border-y-0 bg-gray100 border-black hover:bg-black hover:text-gray100" />
          <CarouselNext className="absolute right-0 h-full w-[110px] md:w-[58px] rounded-none border-y-0 bg-gray100 border-black hover:bg-black hover:text-gray100" />
        </>
      ) : (
        <></>
      )}
    </Carousel>
  );
};

export default TwoRowCarousel;
