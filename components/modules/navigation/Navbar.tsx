"use client";
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import Image from "next/image";
import NavItem from "./NavItem";

interface MenuInfo {
  menuNames: Array<String>;
  subMenuInfo: Array<any>;
}

const menuInfo: MenuInfo = {
  menuNames: ["극단 기억", "공연", "예매", "사진"],
  subMenuInfo: [
    ["극단 소개", "배우 소개", "배우 모집"],
    ["공연1", "공연2"],
    ["예매페이지"],
    ["공연사진", "연습사진"],
  ],
};

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const clickMenu = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const [menuOpenInfo, setMenuOpenInfo] = useState(new Array(menuInfo.menuNames.length).fill(false))
  const clickSubMenu = (index:number) => {
    let tempArr = menuOpenInfo.slice();
    if (tempArr[index]) {
      tempArr[index] = false;
    } else {
      tempArr = new Array(menuInfo.menuNames.length).fill(false);
      tempArr[index] = true;
    }
    setMenuOpenInfo(tempArr);
  }

  return (
    <nav
      className={`w-full relative h-20 border-b border-solid box-border border-collapse duration-300 table ${
        isSideBarOpen ? "bg-black border-white" : "bg-milky-white border-black"
      }`}
    >
      {/* Menu Button */}
      <div className="absolute right-0 h-20 top-0 z-20">
        <MenuButton
          isOpen={isSideBarOpen}
          onClick={clickMenu}
          size={63}
          boxSize={80}
        />
      </div>

      {/* Menu Window */}
      <div
        className={`${
          isSideBarOpen ? "h-full" : "h-0"
        } side-bar w-full text-center mt-20 overflow-hidden flex`}
      >
        <div className="w-[40%] border-r border-solid border-white box-border">
          <Image
            src={"/ppp.png"}
            alt="<기억 사진이 들어갈 위치>"
            width={300}
            height={300}
          ></Image>
        </div>
        <div className="flex flex-col justify-center w-full">
          <NavItem isOpen={menuOpenInfo[0]} onClick={clickSubMenu} idx={0}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
