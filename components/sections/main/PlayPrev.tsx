import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import NewCarousel from "@/components/atoms/NewCarousel";
import Section from "@/components/atoms/Section";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { ma_txt_04_01, ma_txt_04_02 } from "./constants";
import TwoRowCarousel from "@/components/atoms/TwoRowCarousel";
import Image from "next/image";

const PlayPrev = () => {
  return (
    <>
      <Title
        isUnderLine
        className="pb-10 md:pb-8 sm:pb-6 pt-40 md:pt-[120px] sm:pt-12 sm:border-b-0"
        text={
          <>
            {ma_txt_04_01}
            <Button
              variant={"navbarBtn"}
              className="absolute right-0 sm:right-6 top-[50%] translate-y-[-50%]"
            >
              <Text type="paragraph" className="text-b1 sm:text-caption">
                {ma_txt_04_02}
              </Text>
            </Button>
          </>
        }
        align="text-left"
        containerClassName="relative"
        textClassName="text-h3 md:text-h4 sm:text-h4"
      />
      <Section border={"bottom"}>
        <Container className="sm:mb-14">
          <NewCarousel
            images={["/images/posters/p1.jpg", "/images/posters/p2.png"]}
            pictureClassName="border-x box-border w-[316px] md:w-[235px] sm:w-[148px] h-[445px] md:h-[331px] sm:h-[213px]"
            className="block sm:hidden"
            isNextShowComponents
            isLoop
            isAutoPlay
          />
          <TwoRowCarousel
            images={[
              <Image
                src={"/images/posters/p1.jpg"}
                alt="demo_image"
                width={1920}
                height={1920}
                key={1}
              />,
              <Image
                src={"/images/posters/p2.png"}
                alt="demo_image"
                width={1920}
                height={1920}
                key={2}
              />,
            ]}
            pictureClassName="h-[200px] w-[150px] border border-solid border-black"
            className="sm:block hidden"
            isAutoPlay
            isNextShowComponents
          />
        </Container>
      </Section>
    </>
  );
};

export default PlayPrev;
