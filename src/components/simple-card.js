import React from 'react'
import Text from './text'
import Box from './box'
import Button from './button'
import theme from '../utils/theme'

export function SimpleCardContainer({ children, ...props }) {
  return (
    <Button justifyContent={"flex-start"} bg="white" borderRadius={'normal'} p={16} {...props}>
        {children}
    </Button>
  )
}

export function SimpleCardTitle({ children }) {
  return (
    <Text fontSize={16} fontWeight={'bold'}>
      {children}
    </Text>
  )
}

