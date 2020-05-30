import { Button, ImageBackground, StatusBar } from 'react-native'
import * as React from 'react'

import Box from '../components/box'
import SvgLogo from '../components/icons/Logo'
import Search from '../components/search'

import bg from '../assets/bg.jpg'
import SafeAreaView from 'react-native-safe-area-view'
import Text from "../components/text";


function SearchView({ navigation }) {
  //Navigation will go inside as a property, when we call searchview
  return (
    <Box as={SafeAreaView} bg={'red'} flex={1}>
      <StatusBar barStyle={'light-content'} />

      <Box
        as={ImageBackground}
        source={bg}
        style={{ width: '100%', height: 285 }}>


          <Box flex={1}
               alignItems={'center'}
               justifyContent={'center'}>
        <SvgLogo width={180} color="white" />
          </Box>

        <Box  p={16} width={"100%"} mb={-42}>
            <Search />
        </Box>
      </Box>
        <Box position={"relative"} zIndex={-1} flex={1} bg ="white" pt={26}>
            <Box p={30} bg={"white"} flex={1}>
                <Text> Hello </Text>
            </Box>

            </Box>
    </Box>
  )
}
//When we click on a button it will go to detail

export default SearchView
