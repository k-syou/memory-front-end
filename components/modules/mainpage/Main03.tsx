import Container from '@/components/atoms/Container'
import Text from '@/components/atoms/Text'
import React from 'react'

const Main03 = () => {
  return (
    <div className="h-auto border-b border-solid border-black w-full box-border pt-[188px]">
      <Container variant={"main"}>
        <div className='flex justify-between items-center mb-[56px]'>
          <Text type="paragraph" variant={"web_h3"} className="">우리를 소개할게요</Text>
          <div className=''>전체보기</div>
        </div>
      </Container>
      <div className="h-auto border-b border-solid border-black w-full box-border"></div>
      <Container variant={"main"}>
        <div className='h-[345px] w-full flex gap-8'>
          <div className='w-[108px] h-full bg-black'></div>
          <div className='w-[252px] h-full bg-black'></div>
          <div className='w-[252px] h-full bg-black'></div>
          <div className='w-[252px] h-full bg-black'></div>
          <div className='w-[252px] h-full bg-black'></div>
          <div className='w-[252px] h-full bg-black'></div>
          <div className='w-[108px] h-full bg-black'></div>
        </div>
      </Container>
    </div>
  )
}

export default Main03