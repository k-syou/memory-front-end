import React from "react";
import Text from "../atoms/Text";

const Footer = () => {
  return (
    <footer className="w-full text-center mx-auto pt-[61px] pb-[183px]">
      <Text
        language={"en"}
        variant={"web_h5"}
        type="paragraph"
      >{`©2022-2024 Keeok All rights reserved.`}</Text>
      <Text
        language={"en"}
        variant={"web_h6"}
        type="paragraph"
        className="text-gray"
      >{`Keeok IT Team. HJ KS KN JE JW SH`}</Text>
    </footer>
  );
};

export default Footer;
