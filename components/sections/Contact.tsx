import Container from '@/components/atoms/disable/Container'
import Text from '@/components/atoms/disable/Text'
import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import Button from '../atoms/Button';
const Contact = () => {
  return (
    <div className="h-auto sm:border-b sm:border-solid sm:border-black w-full box-border sm:pt-[200px] pt-[32px] sm:pb-0 pb-10">
      <Container variant={"main"} className='flex justify-center flex-col mx-auto items-center'>
        <Text type="paragraph" variant={"web_h3"} className="mb-[54px] sm:block hidden">기억이 궁금하시다면,</Text>
        <Text type="paragraph" variant={"web_h4"} className="mb-[21px] sm:hidden block text-center">기억이 궁금하시다면,</Text>
        <div className='flex sm:mt-10 sm:mb-16 mb-10 sm:gap-[60px] gap-[18px]'>
          <Button variant={'circleBtn'} className='sm:h-[160px] h-[81px] sm:w-[160px] w-[81px] justify-center flex'><CiMail className='my-auto sm:h-16 h-8 sm:w-16 w-8'/></Button>
          <Button variant={'circleBtn'} className='sm:h-[160px] h-[81px] sm:w-[160px] w-[81px] justify-center flex'><CiInstagram className='my-auto sm:h-16 h-8 sm:w-16 w-8'/></Button>
        </div>
      </Container>
    </div>
  )
}

export default Contact