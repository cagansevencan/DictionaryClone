import { Button, View } from 'react-native'
import * as React from 'react'

import Box from '../components/box'
import BoxCenter from '../components/box-center'
import { Bookmark, RotateCcw } from '../components/icons'

function SearchView({ navigation }) {
  //Navigation will go inside as a property, when we call searchview
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </BoxCenter>
  )
}
//When we click on a button it will go to detail

export default SearchView
