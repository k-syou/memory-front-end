import Button from "@/components/atoms/Button";
import Image from "next/image";

type Props = {
  idx: number;
  photoData: Array<any>;
  setIndexNumber: any;
};

const PhotoWindow = ({ idx, photoData, setIndexNumber }: Props) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-gray900 bg-opacity-70 z-50">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-h-[668px] max-w-[1140px] h-auto w-auto my-auto bg-black">
          <Image
            src={photoData[idx].path}
            alt=""
            width={1920}
            height={1920}
            className="max-h-[668px] max-w-[1140px] h-auto w-auto"
          ></Image>
        </div>
        <Button
          variant={"circleBtn"}
          className="absolute bottom-10 left-[40%] translate-x-[-40%] w-[70px] h-[70px]"
          onClick={() => setIndexNumber(idx - 1)}
        >
          {"<"}
        </Button>
        <Button
          variant={"circleBtn"}
          className="absolute bottom-10 left-[60%] translate-x-[-60%] w-[70px] h-[70px]"
          onClick={() => setIndexNumber(idx + 1)}
        >
          {">"}
        </Button>
      </div>
    </>
  );
};

export default PhotoWindow;
