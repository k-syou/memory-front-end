import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import NewCarousel from "@/components/atoms/NewCarousel";
import Section from "@/components/atoms/Section";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { ma_txt_04_01, ma_txt_04_02 } from "./constants";

const PlayPrev = () => {
  return (
    <>
      <Title
        isUnderLine
        className="pb-10 md:pb-8 sm:pb-6 pt-40 md:pt-[120px] sm:pt-12"
        text={
          <>
            {ma_txt_04_01}
            <Button
              variant={"navbarBtn"}
              className="absolute right-0 top-[50%] translate-y-[-50%]"
            >
              <Text type="paragraph" className="text-b1 sm:text-caption">
              {ma_txt_04_02}
              </Text>
            </Button>
          </>
        }
        align="text-left"
        containerClassName="sm:px-[24px]"
        textClassName="text-h3 md:text-h4 sm:text-h4 sm:w-[150px]"
      />
      <Section border={"bottom"}>
        <Container>
          <NewCarousel
            images={["/images/posters/p1.jpg", "/images/posters/p2.png"]}
            pictureClassName="border-x box-border w-[316px] md:w-[235px] sm:w-[148px] h-[445px] md:h-[331px] sm:h-[213px]"
            isNextShowComponents
            isLoop
            isAutoPlay
          />
        </Container>
      </Section>
    </>
  );
};

export default PlayPrev;
