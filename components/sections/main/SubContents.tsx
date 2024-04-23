import Container from "@/components/atoms/Container";
import Image from "next/image";
import Text from "@/components/atoms/Text";
import Section from "@/components/atoms/Section";

const image1 = "/images/main/main2.png";
const image2 = "/images/main/main3.png";

const main_txt_02_01 = "기억은요,";
const main_txt_02_02 = <>극단 기억은 무대 위에서 감동과<br/> 웃음을 나누는 뮤지컬/연극
동호회입니다.<br/>우리는 다양한 직업과 전공을 가진 직장인들,<br/>
대학생들이 모여 만들었습니다.<br/>예술을 전공하지 않은 사람들의 순수한
열정과 상상에서<br/>만들어지는 새로운 예술의 즐거움을 공유하며, 배우와
관객<br/>모두에게 잊지 못할 소중한 기억을 함께 나누고 있습니다.</>;

const main_txt_02_03 = "기억해요,";
const main_txt_02_04 = <>&apos;기억한다&apos;의 사전적 의미는<br/>&quot;머릿속에 남아서 잊히지 않다.&quot; 입니다.<br/>
 그리고 우리는 잊히지 않는<br/>소중한 시간을 함께 한다고 말합니다.<br/>
 기억하며, 또 기억할 수 있는 기억입니다.</>;

const SubContents = () => {
  return (
    <>
      <Section>
        <Container className="mb-6 h-[420px] lg:h-[292px] flex md:flex-col-reverse sm:flex-col-reverse sm:px-6 md:gap-[30px] sm:gap-8 md:h-[645px] sm:h-full">
          <div className="rounded-[32px] w-[854px] min-w-[854px] h-[420px] lg:w-[410px] lg:min-w-[410px] md:w-[504px] md:min-w-[504px] md:h-[360px] md:mx-auto md:mb-14 sm:mb-14 sm:w-[312px] sm:min-w-[312px] sm:h-[230px] bg-black overflow-hidden">
            <Image
              src={image1}
              alt="subContentsImage"
              width={1920}
              height={1920}
            />
          </div>
          <div className="w-full flex flex-col pl-[24px] lg:pl-14 lg:pt-8 md:pl-0 sm:pl-0">
            <Text className="text-h4 pl-8 mb-[24px] md:mb-4 sm:mb-4">
              <span className="text-point-color">{main_txt_02_01}</span>
            </Text>
            <div className="w-full h-full bg-sub1 bg-gradient-to-t from-sub1 to-sub3 rounded-[32px]">
              <Text className="pt-6 pl-8 text-b1 w-[582px] lg:w-[480px] md:w-[660px] sm:w-[312px]">
                {main_txt_02_02}
              </Text>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="h-[420px] mb-[264px] lg:h-[306px] flex md:flex-col sm:flex-col sm:px-6 md:gap-[30px] sm:gap-8 md:h-[645px] sm:h-full">
          <div className="w-full flex flex-col lg:pl-10 md:pl-0 sm:pl-0 lg:pt-8 mr-6">
            <Text className="text-h4 pl-8 mb-6 md:mb-4 sm:mb-4">
            <span className="text-point-color">{main_txt_02_03}</span>
            </Text>
            <div className="w-full h-full bg-sub1 bg-gradient-to-t from-sub1 to-sub3 rounded-[32px]">
              <Text className="pt-6 pl-8 text-b1 w-[582px] lg:w-[480px] md:w-[660px] sm:w-[312px]">
                {main_txt_02_04}
              </Text>
            </div>
          </div>
          <div className="rounded-[32px] w-[928px] min-w-[928px] lg:w-[430px] lg:min-w-[430px] md:w-[504px] md:min-w-[504px] md:h-[360px] md:mx-auto md:mb-14 sm:w-[312px] sm:min-w-[312px] sm:h-[230px] sm:mb-14 bg-black overflow-hidden">
            <Image
              src={image2}
              alt="subContentsImage"
              width={1920}
              height={1920}
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default SubContents;
