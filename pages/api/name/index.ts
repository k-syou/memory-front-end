import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req:NextApiRequest, res:NextApiResponse
) {
  res.status(200).json({
    data: {
      name: "배우 소개 페이지 입니다"
    }
  })
}