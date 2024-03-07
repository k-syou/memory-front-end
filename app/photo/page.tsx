import Container from "@/components/atoms/Container";
import PosterBox from "@/components/atoms/PosterBox";
import Section from "@/components/atoms/Section";
import Title from "@/components/atoms/Title";

const playNames = ["넥투노", "로망스다방", "이눈그"];

type playData = {
  name: string;
  id: string;
  startYY_MM: string;
  endYY_MM: string;
  title: string;
  mainColor: "lavender" | "darkTurquoise" | "woodBrown";
};

const playDatas: Array<playData> = playNames.map((name) => {
  let title = name === "넥투노"
  ? "Next to Normal"
  : name === "로망스다방"
  ? "로망스다방"
  : "이 눈이 그치고 나면"
  return {
    name: name,
    id: name,
    startYY_MM: "22.02",
    endYY_MM: "22.07",
    title:title,
    mainColor:
      name === "넥투노"
        ? "lavender"
        : name === "로망스다방"
        ? "woodBrown"
        : "darkTurquoise",
  };
});
const PhotoMainPage = () => {
  const renderPosterBoxes = () => {
    return playDatas.map((data, idx) => {
      return (
        <PosterBox
          id={data.id}
          widthSize={"photoMain"}
          photoSize={"photoMain"}
          contentSize={"photoMain"}
          mainColor={data.mainColor}
          title={data.title}
          image={`/images/posters/포스터_${data.name}.png`}
          startYY_MM={data.startYY_MM}
          endYY_MM={data.endYY_MM}
          key={idx}
        />
      );
    });
  };
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
            {renderPosterBoxes()}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PhotoMainPage;
