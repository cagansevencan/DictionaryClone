import React from 'react'
import Text from './text'
import Box from "./box";
import Button from "./button";
import theme from "../utils/theme";



export function CardContainer({ children, ...props}) {
  return <Button
      bg="white" borderRadius={"normal"}  py={16} px={12} {...props}>

    <Box flex={1} borderLeftWidth={3} px={12} borderLeftColor={"light"}>
      {children}
    </Box>
  </Button>
}


export function CardTitle({ children }) {
  return (
    <Text fontSize={18} fontWeight={'bold'}>
      {children}
    </Text>
  )
}

export function CardSummary({ children }) {
  return <Text color={"textMedium"} mt={8} fontSize={14}>{children}</Text>
}
