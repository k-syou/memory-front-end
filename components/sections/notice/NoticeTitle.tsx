import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import DropdownMenu from "@/components/atoms/DropdownMenu";
import Section from "@/components/atoms/Section";
import Text from "@/components/atoms/Text";

type Props = {
  menuList: Array<string>
  valueId: string
}

const NoticeTitle = ({menuList, valueId}: Props) => {
  return (
    <>
      <Section overflow={"visible"}>
        <Container className="flex relative overflow-visible mt-20 mb-10">
          <Text className="text-h3 block" type="heading">
            공지사항
          </Text>
          <div className="flex h-full absolute top-[60%] translate-y-[-50%] right-0">
            <DropdownMenu
              className="h-[46px] mr-3"
              menuList={menuList}
              valueId={valueId}
            />
            <input className="h-[46px] w-[320px] border box-border block pl-2 font-ko" />
            <Button variant={"searchBtn"} btnColor={"black"} className="text-b1 h-[46px] border-l-0 text-gray100 hover:text-gray400 font-ko">검색</Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default NoticeTitle;
