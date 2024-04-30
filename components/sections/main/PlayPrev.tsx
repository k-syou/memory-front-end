import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import NewCarousel from "@/components/atoms/NewCarousel";
import Section from "@/components/atoms/Section";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { ma_txt_04_01, ma_txt_04_02 } from "./constants";
import TwoRowCarousel from "@/components/atoms/TwoRowCarousel";
import Image from "next/image";

const playNames = ["넥투노", "로망스다방", "이눈그"];
const posterPaths = playNames.map((name) => {
  return `/images/posters/포스터_${name}.png`
})
const posterDatas = posterPaths.map((path, idx) => {
  return (
    <Image
      src={path}
      alt="demo_image"
      width={1920}
      height={1920}
      key={idx}
    />
  );
});
const PlayPrev = () => {
  return (
    <>
      <Title
        className="pb-10 md:pb-8 sm:pb-6 pt-40 md:pt-[120px] sm:pt-12 sm:border-b-0"
        text={
          <>
            {ma_txt_04_01}
            <Button
              variant={"navbarBtn"}
              btnColor={"sub-point"}
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
      <Section>
        <Container className="sm:mb-14">
          <NewCarousel
            images={posterPaths}
            pictureClassName="w-[275px] md:w-[235px] sm:w-[148px] h-[389px] md:h-[331px] sm:h-[213px] rounded-[32px]"
            className="block sm:hidden"
            isNextShowComponents
            isAutoPlay
          />
          <TwoRowCarousel
            images={posterDatas}
            pictureClassName="h-[200px] w-[150px] border border-solid border-black"
            className="sm:block hidden"
            isAutoPlay
            isNextShowComponents={true}
          />
        </Container>
      </Section>
    </>
  );
};

export default PlayPrev;
