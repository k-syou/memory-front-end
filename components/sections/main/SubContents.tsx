import Container from "@/components/atoms/Container";
import Image from "next/image";
import image from "@/public/images/MenuImage.png";
import Text from "@/components/atoms/disable/Text";
import Section from "@/components/atoms/Section";

const SubContents = () => {
  return (
    <>
      <Section border={"bottom"}>
        <Container className="h-[348px] lg:h-[292px] flex md:flex-col-reverse sm:flex-col-reverse sm:px-6 md:gap-[30px] sm:gap-8 md:h-[645px] sm:h-full">
          <div className="w-[488px] min-w-[488px] lg:w-[410px] lg:min-w-[410px] md:w-[504px] md:min-w-[504px] md:h-[360px] md:mx-auto md:mb-14 sm:mb-14 sm:w-[312px] sm:min-w-[312px] sm:h-[230px] bg-black overflow-hidden">
            <Image
              src={image}
              alt="subContentsImage"
              width={1920}
              height={1920}
            />
          </div>
          <div className="w-full flex flex-col pl-[70px] lg:pl-14 pt-12 lg:pt-8 md:pl-0 sm:pl-0">
            <Text className="text-h4 mb-[24px] md:mb-4 sm:mb-4">기억은요,</Text>
            <Text className="text-b1 w-[582px] lg:w-[480px] md:w-[660px] sm:w-[312px]">
              극단 기억은 무대 위에서 감동과 웃음을 나누는 뮤지컬/연극
              동호회입니다. 우리는 다양한 직업과 전공을 가진 직장인들,
              대학생들이 모여 만들었습니다. 예술을 전공하지 않은 사람들의 순수한
              열정과 상상에서 만들어지는 새로운 예술의 즐거움을 공유하며,배우와
              관객 모두에게 잊지 못할 소중한 기억을 함께 나누고 있습니다.
            </Text>
          </div>
        </Container>
      </Section>
      <Section border={"bottom"}>
        <Container className="h-[365px] lg:h-[306px] flex md:flex-col sm:flex-col sm:px-6 md:gap-[30px] sm:gap-8 md:h-[645px] sm:h-full">
          <div className="h-full w-[220px] lg:w-[30px] border-r md:hidden sm:hidden"></div>
          <div className="w-full flex flex-col pl-[72px] lg:pl-10 md:pl-0 sm:pl-0 pt-12 lg:pt-8">
            <Text className="text-h4 mb-6 md:mb-4 sm:mb-4">기억은요,</Text>
            <Text className="text-b1 w-[500px] lg:w-[462px] md:w-[660px] sm:w-[312px]">
              극단 기억은 무대 위에서 감동과 웃음을 나누는 뮤지컬/연극
              동호회입니다. 우리는 다양한 직업과 전공을 가진 직장인들,
              대학생들이 모여 만들었습니다.예술을 전공하지 않은 사람들의 순수한
              열정과 상상에서 만들어지는 새로운 예술의 즐거움을 공유하며,배우와
              관객 모두에게 잊지 못할 소중한 기억을 함께 나누고 있습니다.
            </Text>
          </div>
          <div className="w-[510px] min-w-[510px] lg:w-[430px] lg:min-w-[430px] md:w-[504px] md:min-w-[504px] md:h-[360px] md:mx-auto md:mb-14 sm:w-[312px] sm:min-w-[312px] sm:h-[230px] sm:mb-14 bg-black overflow-hidden">
            <Image
              src={image}
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
