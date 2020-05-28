import { Button, View } from 'react-native'
import * as React from 'react'

import Box from '../components/box'
import BoxCenter from '../components/box-center'
import { Bookmark, RotateCcw } from '../components/icons'
import SvgLogo from "../components/icons/Logo";

function SearchView({ navigation }) {
  //Navigation will go inside as a property, when we call searchview
  return (
    <BoxCenter bg={"proverbLight"}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <SvgLogo color ="red" />
    </BoxCenter>
  )
}
//When we click on a button it will go to detail

export default SearchView
