import React from "react";
import Text from "../atoms/Text";

const Footer = () => {
  return (
    <footer className="w-full text-center mx-auto bg-dark-gray min-h-32 absolute bottom-0 z-[-1]">
      <Text
        language={"en"}
        variant={"web_h4"}
        type="paragraph"
        className="block pt-3"
      >{`FOOTER`}</Text>
    </footer>
  );
};

export default Footer;
