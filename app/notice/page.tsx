import { noticeData } from "@/components/sections/notice/Notice";
import NoticeTable from "@/components/sections/notice/NoticeTable";
import NoticeTitle from "@/components/sections/notice/NoticeTitle";

const tableData: Array<noticeData> = [
  {
    no: 10,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13"
  },
  {
    no: 9,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13"
  },
  {
    no: 8,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13"
  },
  {
    no: 7,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13"
  },
  {
    no: 6,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13"
  },
  {
    no: 5,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13"
  },
  {
    no: 4,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13"
  },
  {
    no: 3,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13"
  },
  {
    no: 2,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13"
  },
  {
    no: 1,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13"
  },
]

const NoticePage = () => {
  return (
    <>
      <NoticeTitle
        menuList={["전체", "제목", "작성자"]}
        valueId="option-value"
      />
      <NoticeTable tableData={tableData} />
    </>
  );
};

export default NoticePage;
