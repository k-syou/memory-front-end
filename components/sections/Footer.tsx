import React from "react";
import Text from "../atoms/disable/Text";

const Footer = () => {
  return (
    <footer className="w-full text-center mx-auto pt-[61px] pb-[183px]">
      <Text
        language={"en"}
        variant={"web_h5"}
        type="paragraph"
        className="sm:block hidden"
      >{`©2022-2024 Keeok All rights reserved.`}</Text>
      <Text
        language={"en"}
        variant={"web_h6"}
        type="paragraph"
        className="text-gray sm:block hidden"
      >{`Keeok IT Team. HJ KS KN JE JW SH`}</Text>
      <Text
        language={"en"}
        variant={"web_caption"}
        type="paragraph"
        className="sm:hidden block"
      >{`©2022-2024 Keeok All rights reserved.`}</Text>
      <Text
        language={"en"}
        variant={"web_caption"}
        type="paragraph"
        className="text-gray sm:hidden block"
      >{`Keeok IT Team. HJ KS KN JE JW SH`}</Text>
    </footer>
  );
};

export default Footer;
