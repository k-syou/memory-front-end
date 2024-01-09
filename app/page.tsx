import Text from "@/components/atoms/Text";

export default function Home() {
  // 홈페이지
  return (
    <main className="">
      <Text language="ko" type="paragraph">
        기억에 오신 여러분들을 환영합니다
      </Text>
      <Text language="en" type="paragraph">
        Hello Everyone welcome to Memory
      </Text>
      <Text
        className="text-sky"
        language="en"
        type="link"
        url="/pages/about/about-actors"
      >
        About Actors
      </Text>
    </main>
  );
}
