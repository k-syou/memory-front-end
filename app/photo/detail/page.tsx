import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";

const menuList = [
  "전체",
  "1회차 공연",
  "2회차 공연",
  "3회차 공연",
  "4회차 공연",
];
const imageList = new Array<string>(20).fill("1")
const PhotoDetail = () => {
  const renderPhotoMenuList = () => {
    return (
      <div className="flex gap-[10px] mb-6">
        {menuList.map((menu, idx) => {
          return (
            <Button key={idx} variant={"navbarBtn"}><Text className="text-b1">{menu}</Text></Button>
          )
        })}
      </div>
    )
  };
  const renderImageList = () => {
    return (
      <div className="grid grid-cols-6 gap-[6px] mb-[249px]">
        {
          imageList.map((image, idx) => {
            return (
              <div key={idx} className="w-[234px] h-[185px] bg-gray400"></div>
            )
          })
        }
      </div>
    )
  }
  return (
    <>
      <Title
        className="pt-20 pb-4"
        text={`Next to Normal`}
        textClassName="text-h3"
      />
      <Section border={"bottom"}>
        <Container>
          {renderPhotoMenuList()}
          {renderImageList()}
        </Container>
      </Section>
    </>
  );
};

export default PhotoDetail;
