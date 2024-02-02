import Contact from "@/components/sections/Contact";
import MainTitle from "@/components/sections/mainpage/MainTitle";
import SubContents from "@/components/sections/mainpage/SubContents";
import MemberPrev from "@/components/sections/mainpage/MemberPrev";
import PlayPrev from "@/components/sections/mainpage/PlayPrev";
import PhotoPrev from "@/components/sections/mainpage/PhotoPrev";

export default function Home() {
  // 홈페이지
  return (
    <>
      <MainTitle />
      <SubContents />
      <MemberPrev />
      <PlayPrev />
      <Contact />
      {/* <PhotoPrev /> */}
    </>
  );
}
