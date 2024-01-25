import Container from '@/components/atoms/Container'
import SlideCarousel from '@/components/atoms/SlideCarousel'
import React from 'react'

const Main06 = () => {
  return (
    <div className="h-auto border-b border-solid border-black w-full box-border">
      <Container variant={"main"} className='h-[500px]'>
        <SlideCarousel 
          data={["photos/p1.jpg","photos/p2.jpg","photos/p3.jpg","photos/p4.jpg","photos/p5.jpg"]}
          slidesPerView={2}
          pagination={false}
          spaceBetween={20}
        />
      </Container>
    </div>
  )
}

export default Main06