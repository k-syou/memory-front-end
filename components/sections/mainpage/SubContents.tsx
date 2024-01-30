import Container from "@/components/atoms/Container";
import Image from "next/image";
import image from "@/public/images/MenuImage.png";
import Text from "@/components/atoms/Text";

const SubContents = () => {
  return (
    <div className="sm:h-[900px] border-black border-b border-solid w-full box-border">
      <div className="sm:h-[400px] sm:border-black sm:border-b sm:border-solid w-full box-border">
        <Container variant={"main"} className="flex h-full">
          <div className="w-[5%] h-full hidden sm:block"></div>
          <div className="w-[40%] h-full bg-black relative overflow-hidden sm:block hidden">
            <Image src={image} alt="임시이미지" className="img" />
          </div>
          <div className="sm:w-[55%] w-full sm:pl-[5%] sm:pr-[15%] my-auto">
            <div className="sm:mb-8 mb-4 sm:mt-0 mt-12">
              <Text variant={"web_h3"} className="sm:block hidden">
                기억은요,
              </Text>
              <Text variant={"web_h4"} className="sm:hidden block">
                기억은요,
              </Text>
            </div>
            <div>
              <Text variant={"web_h6"} className="sm:block hidden">
              극단 기억은 무대 위에서 감동과 웃음을 나누는
                뮤지컬/연극 동호회입니다. 우리는 다양한 직업과
                전공을 가진 직장인들, 대학생들이 모여
                만들었습니다. 예술을 전공하지 않은 사람들의
                순수한 열정과 상상에서 만들어지는 새로운
                예술의 즐거움을 공유하며, 배우와 관객
                모두에게 잊지 못할 소중한 기억을 함께
                나누고 있습니다.
              </Text>
              <Text variant={"web_body1"} className="sm:hidden block mb-6">
                극단 기억은 무대 위에서 감동과 웃음을 나누는
                <br />
                뮤지컬/연극 동호회입니다. 우리는 다양한 직업과
                <br />
                전공을 가진 직장인들, 대학생들이 모여
                <br />
                만들었습니다. 예술을 전공하지 않은 사람들의
                <br />
                순수한 열정과 상상에서 만들어지는 새로운
                <br />
                예술의 즐거움을 공유하며, 배우와 관객
                <br />
                모두에게 잊지 못할 소중한 기억을 함께
                <br />
                나누고 있습니다.
              </Text>
            </div>
          </div>
        </Container>
      </div>

      <div className="sm:h-[500px] h-[230px] w-full">
        <Container variant={"main"} className="flex h-full">
          <div className="w-[15%] h-full border-r border-solid sm:block hidden"></div>
          <div className="w-[5%] h-full sm:hidden block"></div>
          <div className="w-[50%] my-auto pl-[5%] pr-[5%] sm:block hidden">
            <div className="mb-8">
              <Text variant={"web_h3"} className="">
                기억은요,
              </Text>
            </div>
            <div>
              <Text variant={"web_h6"}>
                모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을
                박탈당하지 아니한다. 모든 국민은 법률이 정하는 바에 의하여
                선거권을 가진다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌
                법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된
                것으로 본다.<br></br>
                제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이
                지명하는 자를 임명한다. 모든 국민은 학문과 예술의 자유를 가진다.
                대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다.
              </Text>
            </div>
          </div>
          <div className="sm:w-[30%] w-full h-full bg-black relative overflow-hidden">
            <Image src={image} alt="임시이미지" className="img" />
          </div>
          <div className="w-[5%] h-full"></div>
        </Container>
      </div>
      <div className="h-10 sm:hidden block"></div>
    </div>
  );
};

export default SubContents;
