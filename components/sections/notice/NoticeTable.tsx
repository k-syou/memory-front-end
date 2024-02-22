"use client";
import Section from "@/components/atoms/Section";
import { noticeData } from "./Notice";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import {
  PiCaretCircleDoubleLeftLight as DblLeftCircle,
  PiCaretCircleDoubleRightLight as DblRightCircle,
  PiCaretCircleLeftLight as LeftCircle,
  PiCaretCircleRightLight as RightCircle,
} from "react-icons/pi";
import { useRouter } from "next/navigation";

type Props = {
  tableData: Array<noticeData>;
};

const NoticeTable = ({ tableData }: Props) => {
  // const route = useRouter();
  return (
    <Section border={"bottom"}>
      <Container className="sm:px-6 sm:overflow-hidden">
        <div className="table border-collapse border-b mb-8 sm:border-t w-full">
          <div className="table-row w-full border-y sm:hidden">
            <div className="table-cell pl-5 w-32 min-w-32 py-4 md:w-28 md:min-w-28">
              <Text className="text-b1">No.</Text>
            </div>
            <div className="table-cell pl-5 w-full">
              <Text className="text-b1">제목</Text>
            </div>
            <div className="table-cell w-32 min-w-32 text-center md:w-28 md:min-w-28">
              <Text className="text-b1">작성자</Text>
            </div>
            <div className="table-cell w-32 min-w-32 text-center md:w-28 md:min-w-28">
              <Text className="text-b1">작성일</Text>
            </div>
          </div>
          {tableData.map((data, idx) => {
            let mobileTitle: string;
            if (data.title?.length < 20) {
              mobileTitle = data.title;
            } else {
              mobileTitle = data.title.replace(data.title.substring(19), "...");
            }
            return (
              <div
                key={idx}
                className={`table-row w-full ${
                  idx != tableData.length - 1 ? "border-b border-gray500" : ""
                }`}
              >
                {/* 데스크탑, 태블릿 */}
                <div className="table-cell pl-5 py-4 sm:hidden">
                  <Text className="text-b1">{data.no}</Text>
                </div>
                <div className="table-cell pl-5 sm:hidden">
                  <Text
                    className="text-b1 cursor-pointer block w-full"
                    type="link"
                    url={`/notice/detail`}
                  >
                    {data.title}
                  </Text>
                </div>
                <div className="table-cell text-center sm:hidden">
                  <Text className="text-b1">{data.writer}</Text>
                </div>
                <div className="table-cell text-center sm:hidden">
                  <Text className="text-b1">{data.writeDate}</Text>
                </div>

                {/* 모바일 */}
                <div className="table-cell w-full py-[10px]">
                  <Text
                    className="text-b2 cursor-pointer block w-full"
                    type="link"
                    url={`/notice/detail`}
                  >
                    {mobileTitle}
                  </Text>
                  <Text
                    className="text-b2 text-gray400"
                    type="paragraph"
                  >{`No.${data.no} | ${data.writer} | ${data.writeDate}`}</Text>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end text-[25px] items-center mb-[72px]">
          <DblLeftCircle className="mr-2 cursor-pointer text-gray500" />
          <LeftCircle className="mr-5 cursor-pointer text-gray500" />
          <div className="flex gap-5 justify-center">
            <div className="w-[25px] h-[25px] rounded-full bg-black text-gray100 my-auto text-center">
              <Text className="text-h6 leading-[25px]">1</Text>
            </div>
            <div>
              <Text className="text-h6 text-gray500">2</Text>
            </div>
            <div>
              <Text className="text-h6 text-gray500">3</Text>
            </div>
            <div>
              <Text className="text-h6 text-gray500">4</Text>
            </div>
            <div>
              <Text className="text-h6 text-gray500">5</Text>
            </div>
            <div>
              <Text className="text-h6 text-gray500 sm:hidden">6</Text>
            </div>
            <div>
              <Text className="text-h6 text-gray500 sm:hidden">7</Text>
            </div>
            <div>
              <Text className="text-h6 text-gray500 sm:hidden">8</Text>
            </div>
            <div>
              <Text className="text-h6 text-gray500 sm:hidden">9</Text>
            </div>
            <div>
              <Text className="text-h6 text-gray500 sm:hidden">10</Text>
            </div>
          </div>
          <DblRightCircle className="ml-5 cursor-pointer" />
          <RightCircle className="ml-2 cursor-pointer" />
        </div>
      </Container>
    </Section>
  );
};

export default NoticeTable;
