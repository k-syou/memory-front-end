import React from 'react'
import Container from './Container'
import Text from './Text'

type Props = {
  isUnderLine : boolean
  text : string
  pt : string
  pb : string
  align? : "right"|"left"|"center"
}
const underLineCss = "border-b border-solid border-black box-border"

const Title = ({isUnderLine, text, pt, pb, align}:Props) => {
  align = align ? align : "left"
  return (
    <div className={`w-full pt-[${pt}] pb-[${pb}] ${(isUnderLine ? underLineCss : "")}`}>
      <Container variant={"main"}>
        <Text type="paragraph" variant={"web_h3"} className={`text-${align}`}>{text}</Text>
      </Container>
    </div>
  )
}

export default Title