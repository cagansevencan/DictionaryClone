import React from 'react'
import Text from './text'
import Box from "./box";
import theme from "../utils/theme";



export function CardContainer({ children, ...props}) {
  return <Box bg="white" borderRadius={"normal"}  py={16} px={12} {...props}>
    <Box borderLeftWidth={3} px={12} borderLeftColor={"light"}>
      {children}
    </Box>
  </Box>
}


export function CardTitle({ children }) {
  return (
    <Text fontSize={18} fontWeight={'bold'}>
      {children}
    </Text>
  )
}

export function CardSummary({ children }) {
  return <Text fontSize={14}>{children}</Text>
}
