"use client";
import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import { MenuInfos } from "./Navbar.d";
import { useRouter } from "next/navigation";
import MenuBox from "./MenuBox";
import Text from "@/components/atoms/Text";

const menuInfos: MenuInfos = {
  mainMenuNames: ["극단 기억", "극단 앨범", "극단 소개"],
  mainMenuLinks: ["/pages/about","#","#"],
  subMenuInfo: [
    ["극단 소개", "배우 소개", "배우 모집"],
    ["공연", "리뷰"],
    ["공연사진", "연습사진"],
  ],
  subMenuLinks: [
    [
      "/pages/about/about-troupe",
      "/pages/about/about-actors",
      "/pages/about/recruit-actors",
    ],
    ["/pages/program&play/play", "/pages/program&play/review"],
    ["/pages/photo/photo-play", "/pages/photo/photo-practice"],
  ],
};

const Navbar = () => {
  const route = useRouter();

  useEffect(() => {
    // navbar hover effect
    document.getElementById("nav-items")?.addEventListener("mouseover", () => {
      document.getElementById("menu-box")?.classList.remove("hidden");
    });
    document.getElementById("nav-items")?.addEventListener("mouseleave", () => {
      document.getElementById("menu-box")?.classList.add("hidden");
    });
    document.getElementById("menu-box")?.addEventListener("mouseover", () => {
      document.getElementById("menu-box")?.classList.remove("hidden");
    });
    document.getElementById("menu-box")?.addEventListener("mouseleave", () => {
      document.getElementById("menu-box")?.classList.add("hidden");
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
        <MenuBox menuInfos={menuInfos} id="menu-box" />
      </ul>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full h-20 border-b border-solid box-border border-black bg-milky-white z-50 max-w-[1920px]`}
      >
        <div className="absolute h-full w-[124px] align-middle text-center leading-[80px] cursor-pointer" onClick={() => route.push("/")}>LOGO</div>
        <div className="h-full flex justify-end">{renderMainMenuItems()}</div>
      </nav>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
