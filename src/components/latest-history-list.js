import React from "react";
import Box from './box'
import { SimpleCardContainer, SimpleCardTitle } from './simple-card'
import Text from './text'
import { FlatList } from 'react-native'


function SearchHistoryList({data}) {
  return (
    <FlatList
      style={{ padding: 16 }}
      data={data }
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Box py={6}>
          <SimpleCardContainer>
            <SimpleCardTitle> {item.title} </SimpleCardTitle>
          </SimpleCardContainer>
        </Box>
      )}
      ListHeaderComponent={
        <Text color={'textLight'} mb={10}>
          Son Arananlar
        </Text>
      }
    />
  )
}
export default SearchHistoryList
