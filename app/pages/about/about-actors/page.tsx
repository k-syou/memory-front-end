"use client"
import Text from "@/components/atoms/Text";
import React, { useEffect, useState } from "react";

const AboutActors = () => {
  const [data, setData] = useState({data:{name:""}})
  useEffect(() => {
    fetch("http://localhost:3000/api/name")
    .then((res) => res.json())
    .then((data) => setData(data));
  })
  // const fetchName = async () => {
  //   const res = await fetch("http://localhost:3000/api/name");
  //   const data = await res.json();
  //   setData(data);
  //   return data
  // }
  return (
    <div>
      <Text type="paragraph" language="ko">
        {data.data.name}
      </Text>
      <Text type="link" url="/">
        HOME
      </Text>
      
    </div>
  );
};

export default AboutActors;
