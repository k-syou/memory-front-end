import Container from "@/components/atoms/Container";
import PosterBox from "@/components/atoms/PosterBox";
import Section from "@/components/atoms/Section";
import Title from "@/components/atoms/Title";

const PhotoMainPage = () => {
  return (
    <>
      <Title
        className="pt-20 pb-10"
        text={"공연 사진"}
        textClassName="text-h3"
      />
      <Section border={"bottom"} className="pb-[275px]">
        <Container>
          <div className="flex gap-6">
            <PosterBox
              id="next-to-normal1"
              widthSize={"photoMain"}
              photoSize={"photoMain"}
              contentSize={"photoMain"}
              mainColor={"lavender"}
              title="Next to Normal"
              image={"/images/posters/p1.jpg"}
              startYY_MM="22.02"
              endYY_MM="22.07"
            />
            <PosterBox
              id="next-to-normal2"
              widthSize={"photoMain"}
              photoSize={"photoMain"}
              contentSize={"photoMain"}
              mainColor={"lavender"}
              title="Next to Normal"
              image={"/images/posters/p1.jpg"}
              startYY_MM="22.02"
              endYY_MM="22.07"
            />
            <PosterBox
              id="next-to-normal3"
              widthSize={"photoMain"}
              photoSize={"photoMain"}
              contentSize={"photoMain"}
              mainColor={"lavender"}
              title="Next to Normal"
              image={"/images/posters/p1.jpg"}
              startYY_MM="22.02"
              endYY_MM="22.07"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PhotoMainPage;
