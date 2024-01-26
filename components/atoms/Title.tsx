import React from "react";
import Container from "./Container";
import Text from "./Text";
import { cn } from "@/lib/utils";

type Props = {
    isUnderLine: boolean;
    text: string;
    className?: string; // 클래스 네임 추가, pt,pb props 삭제
    align?: "right" | "left" | "center";
};
const underLineCss = "border-b border-solid border-black box-border";

const Title = ({ isUnderLine, text, className, align }: Props) => {
    align = align ? align : "left";
    return (
        <div
            // 여기 부분이 작동하지 않았는 이유는 tailwind 작동 방식 때문입니다.
            // 모든 인터프리터, 컴파일러 류 프로그램들은 쓰여진 코드를 '평가'하는 과정을 거칩니다.
            // 어떤 소스코드가 어떤 값을 가지는지 판단하는 행위죠.
            // tailwindcss도 내부적으로 프로그래머가 작성한 유틸리티 클래스들을 파싱하고 평가한 다음, 결과 값에 알맞은 css를 만들어 내는 과정을 거칩니다.
            // 그런데 tailwindcss는 프로그래밍 언어 해석기와 다르게 소스코드 문자열을 다이나믹하게 다루지 않습니다.
            // 지금 작성한 방식은 클래스 중간에 템플릿 스트링이 들어 있습니다. 이 방법은 tailwindcss는 css를 생성하는 타이밍에 해당 템플릿 스트링을 평가하지 못합니다.
            // 그래서 이에 해당하는 css가 만들어지지 않죠. 원래 코드에선 .pt-/[120px/] 이라고 하는 css 클래스가 만들어지길 원하지만 tailwind가
            // 값을 평가하지 못했으니 원하는 css 클래스가 만들어지지 않는겁니다.

            // cva를 사용하지 않을 것이라면 className을 props로 받으세요.
            // 원래 사용하신 props인 pt, pb는 어차피 스타일 관련한 클래스 입니다. 관련 부분은 tailwindcss를 사용하는 프로젝트에서 굳이 다른 props로
            // 받을 필요가 없습니다.
            // Props타입과 className 받는 부분을 수정 했습니다. 이 방식을 쓰면 바로 원하는 padding 값이 적용 됩니다.
            className={cn(
                `w-full ${isUnderLine ? underLineCss : ""}`,
                className
            )}
        >
            <Container variant={"main"}>
                <Text
                    type="paragraph"
                    variant={"web_h3"}
                    className={`text-${align}`}
                >
                    {text}
                </Text>
            </Container>
        </div>
    );
};

export default Title;
