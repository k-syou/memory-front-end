import Title from "@/components/atoms/Title";
import Contact from "@/components/sections/Contact";
import AboutIntro from "@/components/sections/about/AboutIntro";
import ActorsIntro from "@/components/sections/about/ActorsIntro";
import React from "react";

const About = () => {
  return (
    <>
      <AboutIntro />
      <ActorsIntro />
      <Contact />
    </>
  );
};

export default About;
