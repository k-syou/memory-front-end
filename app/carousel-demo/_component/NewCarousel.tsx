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

interface NewCarouselProps {
    images: string[];
    isAutoPlay?: boolean;
}
const NewCarousel = ({ images, isAutoPlay }: NewCarouselProps) => {
    if (isAutoPlay) {
        return (
            <Carousel
                className="flex justify-center items-center"
                opts={{
                    loop: true,
                }}
                plugins={[Autoplay({ delay: 2400 })]}
            >
                <CarouselContent className="max-w-[1080px] max-h-[420px]">
                    {images.map((image, index) => (
                        <CarouselItem
                            key={index}
                            className="flex justify-center items-center basis-auto"
                        >
                            <Image
                                src={image}
                                alt="demo_image"
                                className="w-auto h-[420px]"
                                width={1080}
                                height={1080}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        );
    } else {
        return (
            <Carousel
                className="flex justify-center items-center"
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent className="max-w-[1080px] max-h-[420px]">
                    {images.map((image, index) => (
                        <CarouselItem
                            key={index}
                            className="flex justify-center items-center basis-auto"
                        >
                            <Image
                                src={image}
                                alt="demo_image"
                                className="w-auto h-[420px]"
                                width={1080}
                                height={1080}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        );
    }
};

export default NewCarousel;
