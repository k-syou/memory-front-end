import Container from '@/components/atoms/Container'
import Text from '@/components/atoms/Text'
import React from 'react'

const Main04 = () => {
  return (
    <div className="h-auto border-b border-solid border-black w-full box-border pt-[198px]">
      <Container variant={"main"}>
        <div className='flex justify-center items-center mb-[52px]'>
          <Text type="paragraph" variant={"web_h3"} className="text-center">우리가 만든 기억이에요</Text>
        </div>
      </Container>
      <div className="h-auto border-b border-solid border-black w-full box-border"></div>
      <Container variant={"main"}>
        <div className='h-[752px] w-full flex gap-8'>
          <div className='w-[536px] h-full bg-black'></div>
          <div className='w-[536px] h-full bg-black'></div>
          <div className='w-[536px] h-full bg-black'></div>
        </div>
      </Container>
    </div>
  )
}

export default Main04