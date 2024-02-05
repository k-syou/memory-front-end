import React from "react";
import Text from "../atoms/Text";
import Section from "../atoms/Section";
import Container from "../atoms/Container";

const Footer = () => {
  return (
    <Section>
      <Container>
        <footer className="w-full text-center mx-auto py-8 sm:py-4">
          <Text
            language={"en"}
            type="paragraph"
            className="text-s1 text-gray900 sm:text-caption"
          >{`©2022-2024 Keeok All rights reserved.`}</Text>
          <Text
            language={"en"}
            type="paragraph"
            className="text-s2 text-gray300 sm:text-caption"
          >{`Keeok IT Team. HJ KS KN JF JW SH`}</Text>
        </footer>
      </Container>
    </Section>
  );
};

export default Footer;
