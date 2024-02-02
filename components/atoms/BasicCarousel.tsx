"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
const data = [
  "photos/p1.jpg",
  "photos/p2.jpg",
  "photos/p3.jpg",
  "photos/p4.jpg",
  "photos/p5.jpg",
];
const BasicCarousel = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {data.map((image, idx) => {
            let src: StaticImageData = require(`@/public/images/${image}`);
            return <CarouselItem key={idx}>
              <Image src={src} alt={`image-${idx}`} className="img"/>
            </CarouselItem>;
          })}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </>
  );
};

export default BasicCarousel;
