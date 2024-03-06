"use client";
import { noticeData } from "@/components/sections/notice/Notice";
import NoticeTable from "@/components/sections/notice/NoticeTable";
import NoticeTitle from "@/components/sections/notice/NoticeTitle";
import { useEffect, useState } from "react";

const tempTableData: Array<noticeData> = [
  {
    no: 10,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13",
  },
  {
    no: 9,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13",
  },
  {
    no: 8,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13",
  },
  {
    no: 7,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13",
  },
  {
    no: 6,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13",
  },
  {
    no: 5,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13",
  },
  {
    no: 4,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13",
  },
  {
    no: 3,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13",
  },
  {
    no: 2,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13",
  },
  {
    no: 1,
    title: "야보고싶었어전화기다렸어오랜만바빴어야요즘또약하니",
    writer: "최석호",
    writeDate: "2024.01.13",
  },
];
const valueId: string = "option-value";
const NoticePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchType, setSearchType] = useState<string>("전체");
  const [searchText, setSearchText] = useState<string>("");
  const [tableData, setTableData] = useState(tempTableData);
  const movePage = (page: number) => {
    setCurrentPage(page);
  };
  const getTableData = () => {};
  const clickSearchBtn = () => {
    // 검색 버튼 클릭
    let tempSearchType = document.getElementById(valueId)?.innerText;
    let tempSearchText = (document.getElementById("search-text") as HTMLInputElement).value;
    setSearchType(tempSearchType!);
    setSearchText(tempSearchText!);
  };
  useEffect(() => {
    // clickSearchBtn 이후 검색된 테이블 데이터 가져오기
    console.log(`검색타입 : ${searchType} | 검색어 : ${searchText}`);
  }, [searchText, searchType])
  useEffect(() => {
    // 페이지 변경시 데이터 테이블 가져오기
    console.log(`현재페이지 : ${currentPage}`)
  }, [currentPage])
  return (
    <>
      <NoticeTitle menuList={["전체", "제목", "작성자"]} valueId={valueId} clickSearchBtn={clickSearchBtn}/>
      <NoticeTable tableData={tableData} />
    </>
  );
};

export default NoticePage;
