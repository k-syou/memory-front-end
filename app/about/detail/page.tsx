"use client";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { actorInfo } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PiArrowLeftThin } from "react-icons/pi";
// type Props = {
//   actorInfo?: actorInfo;
// };
// const ActorDetailPage = ({ actorInfo }: Props) => {
const ActorDetailPage = () => {
  const route = useRouter()
  const actorInfo:actorInfo = {
    activities: [
      {
        startPeriod: "2023.04",
        endPeriod: "2023.10",
        title: "[뮤지컬] NEXT TO NORMAL",
        casting: "파인 박사 / 매든 박사",
      },
      {
        startPeriod: "2022.08",
        endPeriod: "2022.12",
        title: "[뮤지컬] 이 눈이 그치고 나면",
        casting: "닥터 리",
      },
      {
        startPeriod: "2022.02",
        endPeriod: "2022.07",
        title: "[뮤지컬] 명동로망스",
        casting: "박인환",
      },
      {
        startPeriod: "2022.02",
        endPeriod: "2022.07",
        title: "[뮤지컬] 명동로망스",
        casting: "박인환",
      },
    ],
    contents:
      "모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다. 모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다.",
    imagePath: "/images/actors/프사_영민.png",
    name: "최석호",
  };
  return (
    <>
      <Title
        text={
          <>
            {actorInfo.name}
            <Button variant={"backToListBtn"} className="absolute right-0 h-10" onClick={() => route.push("/about")}>
              <PiArrowLeftThin className="absolute w-[24px] h-[24px] my-auto top-[50%] translate-y-[-50%] flex items-center" />
              <Text
                type="paragraph"
                className="text-b1 sm:text-caption ml-8"
              >
                목록보기
              </Text>
            </Button>
            {/* <Button
              onClick={() => route.push("/about")}
              variant={"navbarBtn"}
              className="absolute right-0 top-[50%] translate-y-[-50%] w-[118px] flex flex-row my-auto"
            >
              <PiArrowLeftThin className="inline-block text-[24px] w-[24px] h-[24px] mr-1 my-auto" />
              <Text
                type="paragraph"
                className="text-b1 sm:text-caption inline-block"
              >
                목록보기
              </Text>
            </Button> */}
          </>
        }
        className="pt-20 pb-6"
        textClassName="text-h4"
        isUnderLine
      />
      <Section border={"bottom"}>
        <Container className="flex">
          <div className="flex flex-col border-collapse">
            <div className="border-l w-[468px] h-[640px] min-h-[640px] box-border overflow-hidden">
              <Image
                src={actorInfo.imagePath}
                alt=""
                height={1920}
                width={1920}
              />
            </div>

            {actorInfo.activities.length > 1 && (
              <div className="border-l h-full border-t"></div>
            )}
          </div>

          <div className="border-l pl-20 pt-12">
            <div className="flex flex-col border-b box-border">
              <div>
                <Text className="text-h5 mb-5">소개</Text>
              </div>
              <div>
                <Text className="text-b1 mb-[50px]">{actorInfo.contents}</Text>
              </div>
            </div>

            <div className="flex flex-col pt-10 pb-[124px]">
              <div>
                <Text className="text-h5">활동내역</Text>
              </div>
              {actorInfo.activities.map((activity, idx) => {
                return (
                  <div
                    key={idx}
                    className={`flex flex-col pt-5 pb-5 gap-[10px] ${
                      idx === 0 ? "" : "border-t"
                    }`}
                  >
                    <div className="flex gap-6">
                      <div>
                        <Text className="text-b1 text-gray700">기간</Text>
                      </div>
                      <div>
                        <Text className="text-b1">{`${activity.startPeriod} ~ ${activity.endPeriod}`}</Text>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <Text className="text-b1 text-gray700">작품</Text>
                      </div>
                      <div>
                        <Text className="text-b1">{activity.title}</Text>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <Text className="text-b1 text-gray700">배역</Text>
                      </div>
                      <div>
                        <Text className="text-b1">{activity.casting}</Text>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ActorDetailPage;
