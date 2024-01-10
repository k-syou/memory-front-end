import React from "react";
import Text from "../atoms/Text";

const Footer = () => {
  return (
    <footer className="container w-full text-center mx-auto bg-sky">
      <Text
        language={"en"}
        variant={"desk_md"}
        type="paragraph"
      >{`FOOTER`}</Text>
    </footer>
  );
};

export default Footer;
