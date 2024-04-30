"use client";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import PhotoWindow from "@/components/sections/photo/PhotoWindow";
import photoData from "@/components/sections/photo/constants";
import Image from "next/image";
import { useState } from "react";

const menuList = ["전체", "A팀", "B팀"];

const PhotoDetail = () => {
  const [menuActiveArr, setMenuActiveArr] = useState([true, false, false]);
  const [curMenu, setCurMenu] = useState("전체");
  const [curImageData, setCurImageData] = useState(photoData);
  const [isViewWindow, setIsViewWindow] = useState(true);
  const [intIndex, setIntIndex] = useState(0)

  const setIndexNumber = (num: number) => {
    setIntIndex(num)
  }

  const setImageData = () => {
    if (curMenu === "전체") {
      setCurImageData(photoData);
    } else {
      let tmp = [];
      for (let i = 0; i < photoData.length; i++) {
        if (photoData[i].team === curMenu) {
          tmp.push(photoData[i]);
        }
      }
      setCurImageData(tmp);
    }
  };

  const clickMenu = (idx: number) => {
    let tmp_arr = menuList.map(() => {
      return false;
    });
    tmp_arr[idx] = true;
    setMenuActiveArr(tmp_arr);
    setCurMenu(menuList[idx]);
    setImageData();
  };
  const renderPhotoMenuList = () => {
    return (
      <div className="flex gap-[10px] mb-6">
        {menuList.map((menu, idx) => {
          return (
            <Button
              key={idx}
              onClick={() => clickMenu(idx)}
              variant={"navbarBtn"}
              className={menuActiveArr[idx] ? "activate-btn" : ""}
            >
              <Text className="text-b1">{menu}</Text>
            </Button>
          );
        })}
      </div>
    );
  };
  const renderImageList = () => {
    return (
      <div className="grid grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-[6px] mb-[249px]">
        {curImageData.map((image, idx) => {
          return (
            <div
              key={idx}
              className="w-[234px] h-[185px] lg:w-[200px] lg:h-[158px] md:w-[187px] md:h-[149px] sm:w-[154px] sm:h-[122px] bg-gray400 overflow-hidden relative"
            >
              <picture>
                <source srcSet={image.path} type="image/avif" />
                <source srcSet={image.path} type="image/webp" />
                <Image
                  src={image.path}
                  fill
                  alt={image.num}
                  className="h-auto w-auto object-cover"
                ></Image>
              </picture>
              {/* width={1920} height={1920}  */}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <Title
        className="pt-20 pb-4"
        text={`Next to Normal`}
        textClassName="text-h3"
      />
      <Section border={"bottom"}>
        <Container>
          {renderPhotoMenuList()}
          {renderImageList()}
        </Container>
      </Section>
      {isViewWindow && <PhotoWindow setIndexNumber={setIndexNumber} idx={intIndex} photoData={photoData} />}
    </>
  );
};

export default PhotoDetail;
