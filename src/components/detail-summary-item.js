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
  const ornekler = data?.orneklerListe
  const ozellikler = data?.ozelliklerListe && data.ozelliklerListe.map(_ => _.tam_adi) || ["isim"]
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
                {data.anlam_sira}
            </Text>
            <Text color={'red'}>{ozellikler.join(", ")}</Text>
          </Box>
          <Box mt={8}>
            <Text fontSize={14} fontWeight={'600'}>
              {data.anlam}
            </Text>
            {ornekler &&
            <Text color={'textLight'} ml={10} mt={12} fontWeight={'500'}>
              {ornekler[0]?.ornek} <Text fontWeight={"700"} color={'textLight'}>
              {ornekler[0]?.yazar_id !== "0" && `- ${ornekler[0]?.yazar[0].tam_adi}`}
            </Text>
            </Text>}

          </Box>
        </Box>
      ) : (
         children
      )}
    </Box>
  )
}
