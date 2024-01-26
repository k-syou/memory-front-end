'use client'
import React from 'react'
import Container from './Container'
import Text from './Text'

type Props = {
  isUnderLine : boolean
  text : string
  pt : string
  mb : string
  align? : "right"|"left"|"center"
}
const underLineCss = "border-b border-solid border-black box-border"

const Title = ({isUnderLine, text, pt, mb, align}:Props) => {
  align = align ? align : "left"
  return (
    <div className={`h-auto w-full pt-[${pt}] ${(isUnderLine && underLineCss)}`}>
      <Container variant={"main"}>
        <Text type="paragraph" variant={"web_h3"} className={`mb-[${mb}] text-${align}`}>{text}</Text>
      </Container>
    </div>
  )
}

export default Title