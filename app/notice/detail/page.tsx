
"use client"
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { useRouter } from "next/navigation";
import { PiArrowLeftThin } from "react-icons/pi";
const NoticeDetailPage = () => {
  const route = useRouter()
  return (
    <>
      <Title
        className="mt-20 mb-2"
        text={"[공지사항] 제목"}
        textClassName="text-h5"
      />
      <Section border={"bottom"}>
        <Container>
          {/* 이름 날짜 */}
          <div className="flex w-full border-b pb-3">
            <div>
              <Text>최석호</Text>
            </div>
            <div className="text-right w-full">
              <Text>2024.01.21</Text>
            </div>
          </div>
          {/* 내용 */}
          <div className="pt-8 pb-20 border-b font-ko">
            <div>내용입니다~</div>
          </div>
          {/* prev, next */}
          <div className="table border-collapse mb-7">
            <div className="table-row w-full border-b">
              <div className="table-cell pl-5 w-32 min-w-32 py-4">
                <Text className="text-b1">이전글</Text>
              </div>
              <div className="table-cell pl-5 w-full">
                <Text className="text-b1">
                  야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니
                </Text>
              </div>
              <div className="table-cell w-32 min-w-32 text-center">
                <Text className="text-b1">최석호</Text>
              </div>
              <div className="table-cell w-32 min-w-32 text-center">
                <Text className="text-b1">2024.01.31</Text>
              </div>
            </div>
            <div className="table-row w-full border-b">
              <div className="table-cell pl-5 w-32 min-w-32 py-4">
                <Text className="text-b1">다음글</Text>
              </div>
              <div className="table-cell pl-5 w-full">
                <Text className="text-b1">
                  야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니
                </Text>
              </div>
              <div className="table-cell w-32 min-w-32 text-center">
                <Text className="text-b1">최석호</Text>
              </div>
              <div className="table-cell w-32 min-w-32 text-center">
                <Text className="text-b1">2024.01.31</Text>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="flex justify-end items-center gap-4 mb-10">
            <Button variant={"backToListBtn"} onClick={() => route.push('#')}>TOP</Button>
            <Button variant={"backToListBtn"} onClick={() => route.push('/notice')} className="relative">
              <PiArrowLeftThin className="absolute w-[24px] h-[24px] my-auto top-[50%] translate-y-[-50%]" />
              <Text
                type="paragraph"
                className="text-b1 sm:text-caption inline-block ml-8"
              >
                목록보기
              </Text>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default NoticeDetailPage;
