import Text from "@/components/atoms/Text";
import {
  PiCaretCircleDoubleLeftLight as DblLeftCircle,
  PiCaretCircleDoubleRightLight as DblRightCircle,
  PiCaretCircleLeftLight as LeftCircle,
  PiCaretCircleRightLight as RightCircle,
} from "react-icons/pi";

const NoticePagenation = () => {
  return (
    <div className="flex justify-end text-[25px] items-center mb-[72px]">
      <DblLeftCircle className="mr-2 cursor-pointer text-gray500 w-[25px] h-[25px]" />
      <LeftCircle className="mr-5 cursor-pointer text-gray500 w-[25px] h-[25px]" />
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
      <DblRightCircle className="ml-5 cursor-pointer w-[25px] h-[25px]" />
      <RightCircle className="ml-2 cursor-pointer w-[25px] h-[25px]" />
    </div>
  );
};

export default NoticePagenation;
