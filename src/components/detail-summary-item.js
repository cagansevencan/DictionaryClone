import React from 'react'
import Text from './text'
import Box from './box'

export default function DetailSummaryItemContainer({
  children,
  data,
  order,
  type,
  border,
  ...props
}) {
  return (
    <Box position="relative" bg={'white'} px={28} py={20} {...props}>
      {border && (
        <Box
          position={'absolute'}
          left={12}
          right={12}
          height={1}
          bg={'light'}
        />
      )}

      {/* body */}
      {data ? (
        <Box>
          <Box flexDirection={'row'}>
            <Text color={'textLight'} ml={-14} mr={8}>
              1
            </Text>
            <Text color={'red'}>ISIM</Text>
          </Box>
          <Box mt={8}>
            <Text fontSize={14} fontWeight={'600'}>
              {children}
            </Text>
            <Text color={'textLight'} ml={10} mt={12} fontWeight={'500'}>
              {children}
            </Text>
          </Box>
        </Box>
      ) : (
         children
      )}
    </Box>
  )
}
