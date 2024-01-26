import Container from '@/components/atoms/Container'
import Text from '@/components/atoms/Text'
import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
const Contact = () => {
  return (
    <div className="h-auto border-b border-solid border-black w-full box-border pt-[200px]">
      <Container variant={"main"} className='flex justify-center flex-col mx-auto items-center'>
        <Text type="paragraph" variant={"web_h3"} className="mb-[54px]">기억이 궁금하시다면,</Text>
        <div className='flex mt-10 mb-16 gap-[60px]'>
          <button className='h-[160px] w-[160px] border border-solid border-black rounded-[50%] justify-center flex'><CiMail className='my-auto h-16 w-16'/></button>
          <button className='h-[160px] w-[160px] border border-solid border-black rounded-[50%] justify-center flex'><CiInstagram className='my-auto h-16 w-16'/></button>
        </div>
      </Container>
    </div>
  )
}

export default Contact