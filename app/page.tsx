import Contact from "@/components/sections/Contact";
import MainTitle from "@/components/sections/main/MainTitle";
import SubContents from "@/components/sections/main/SubContents";
import MemberPrev from "@/components/sections/main/MemberPrev";
import PlayPrev from "@/components/sections/main/PlayPrev";
import PhotoPrev from "@/components/sections/main/PhotoPrev";

export default function Home() {
  // 홈페이지
  return (
    <>
      <MainTitle />
      <SubContents />
      <MemberPrev />
      <PlayPrev />
      <Contact /> 
      <PhotoPrev />
    </>
  );
}
