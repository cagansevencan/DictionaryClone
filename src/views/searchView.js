import { Button, View } from 'react-native'
import * as React from 'react'

import Box from '../components/box'
import SvgLogo from '../components/icons/Logo'
import Search from '../components/search'

function SearchView({ navigation }) {
  //Navigation will go inside as a property, when we call searchview
  return (
    <Box>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box p={20}>
        <SvgLogo color="red" />
      </Box>
      <Box p={10}>
        <Search />
      </Box>
    </Box>
  )
}
//When we click on a button it will go to detail

export default SearchView
