"use client";
import React, { useEffect, useState } from "react";
import { MenuInfos } from "./Navbar.d";
import { useRouter } from "next/navigation";
import MenuBox from "./MenuBox";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import { IoMenuOutline } from "react-icons/io5";

const menuInfos: MenuInfos = {
  mainMenuNames: ["극단 기억", "극단 소식", "극단 앨범"],
  mainMenuLinks: ["/pages/about","#","#"],
  subMenuInfo: [
    ["극단 소개", "단원 소개", "단원 모집"],
    ["공지사항", "연습일지"],
    ["공연 사진", "연습 사진"],
  ],
  subMenuLinks: [
    [
      "/pages/about#about-intro",
      "/pages/about#actors-intro",
      "/pages/about#recruit-actor",
    ],
    ["#", "#"],
    ["#", "#"],
  ],
};

const Navbar = () => {
  const [viewMenuBox, setViewMenuBox] = useState(false);
  const route = useRouter();

  useEffect(() => {
    // navbar hover effect
    document.getElementById("nav-items")?.addEventListener("mouseover", () => {
      setViewMenuBox(true);
    });
    document.getElementById("nav-items")?.addEventListener("mouseleave", () => {
      setViewMenuBox(false);
    });
    document.getElementById("menu-box")?.addEventListener("mouseover", () => {
      setViewMenuBox(true);
    });
    document.getElementById("menu-box")?.addEventListener("mouseleave", () => {
      setViewMenuBox(false);
    });
  });

  const renderMainMenuItems = () => {
    let mainMenuItems = menuInfos.mainMenuNames.map((menu, idx) => {
      return (
        <li
          className="float-left w-40 h-full flex items-center justify-center"
          key={idx}
        >
          <Text type="link" url={menuInfos.mainMenuLinks[idx]} variant={"web_h6"}>
            {menu}
          </Text>
        </li>
      );
    });
    return (
      <ul id="nav-items" className="right-0 h-full absolute mr-5">
        {mainMenuItems}
        {viewMenuBox && <MenuBox menuInfos={menuInfos} id="menu-box" />}
      </ul>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full sm:h-20 h-14 border-b border-solid box-border border-black bg-milky-white z-50 max-w-[1920px]`}
      >
        <div className="absolute h-full sm:w-[124px] w-[93px] align-middle text-center sm:leading-[80px] leading-[56px] cursor-pointer" onClick={() => route.push("/")}>LOGO</div>
        <div className="h-full flex justify-end sm:hidden">
          <Button className="w-14 h-14">
            <IoMenuOutline className="text-lg mx-auto" />
          </Button></div>
        <div className="h-full hidden justify-end sm:flex">{renderMainMenuItems()}</div>
      </nav>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
