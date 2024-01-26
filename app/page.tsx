import Contact from "@/components/sections/Contact";
import Main01 from "@/components/sections/mainpage/Main01";
import Main02 from "@/components/sections/mainpage/Main02";
import Main03 from "@/components/sections/mainpage/Main03";
import Main04 from "@/components/sections/mainpage/Main04";
import Main06 from "@/components/sections/mainpage/Main06";

export default function Home() {
  // 홈페이지
  return (
    <>
      <Main01 />
      <Main02 />
      <Main03 />
      <Main04 />
      <Contact />
      <Main06 />
    </>
  );
}
