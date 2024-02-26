import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import DropdownMenu from "@/components/atoms/DropdownMenu";
import Section from "@/components/atoms/Section";
import Text from "@/components/atoms/Text";

type Props = {
  menuList: Array<string>
  valueId: string
  clickSearchBtn: any
}

const NoticeTitle = ({menuList, valueId, clickSearchBtn}: Props) => {

  return (
    <>
      <Section overflow={"visible"}>
        <Container className="flex relative overflow-visible mt-20 mb-10 sm:flex-col sm:mt-[42px] sm:mb-4 sm:px-6">
          <Text className="text-h3 block sm:mb-6 sm:text-h4" type="heading">
            공지사항
          </Text>
          <div className="flex h-full absolute top-[60%] translate-y-[-50%] right-0 sm:relative sm:translate-y-0">
            <DropdownMenu
              className="mr-3"
              menuList={menuList}
              valueId={valueId}
            />
            <input id="search-text" className="h-[46px] w-[320px] border box-border block pl-2 font-ko sm:text-b2 sm:w-full sm:h-10" />
            <Button onClick={() => clickSearchBtn()} variant={"searchBtn"} btnColor={"black"} className="text-b1 sm:text-b2 h-[46px] sm:h-10 border-l-0 text-gray100 hover:text-gray400 font-ko">검색</Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default NoticeTitle;
