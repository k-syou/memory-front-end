import Container from "@/components/atoms/disable/Container";
import NewCarousel from "@/components/atoms/NewCarousel";
import Title from "@/components/atoms/Title";

const PlayPrev = () => {
  return (
    <>
      <Title
        isUnderLine
        className="pb-[52px] pt-[198px]"
        text="우리가 만든 기억이에요"
        align="text-left"
      />
      <div className="h-auto border-b border-solid border-black w-full box-border">
        <Container variant={"main"} className="sm:h-[752px] h-[213px]">
          <NewCarousel
            images={["/images/posters/p1.jpg", "/images/posters/p2.png"]}
            pictureClassName="sm:w-[536px] w-[148px] sm:h-[752px] h-[213px] border-x border-solid border-black"
            isNextShowComponets
          />
        </Container>
      </div>
    </>
  );
};

export default PlayPrev;
