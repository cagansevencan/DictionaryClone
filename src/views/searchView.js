import { ImageBackground, StatusBar } from 'react-native'
import * as React from 'react'

import Box from '../components/box'
import SvgLogo from '../components/icons/Logo'
import Search from '../components/search'

import bg from '../assets/bg.jpg'
import SafeAreaView from 'react-native-safe-area-view'
import Text from '../components/text'
import { useFocusEffect } from '@react-navigation/native'

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1')
    }, [])
  )

  //Navigation will go inside as a property, when we call searchview
  return (
    <Box as={SafeAreaView} bg={'red'} flex={1}>
      <StatusBar barStyle={'light-content'} />

      <Box position={'relative'} zIndex={1} height={isSearchFocus? 0 : 285}>
        <Box
          as={ImageBackground}
          source={bg}
          style={{ width: '100%', height: '100%' }}
        >
          <Box flex={1} alignItems={'center'} justifyContent={'center'}>
            <SvgLogo width={180} color="white" />
          </Box>

          <Box p={16} width={'100%'} mb={-42}>
            <Search onChangeFocus={status => setSearchFocus(status)} />
          </Box>
        </Box>
      </Box>

      <Box flex={1} bg="white" pt={26}>
        <Box p={30} flex={1}>
          <Text> Hello </Text>
        </Box>
      </Box>
    </Box>
  )
}
//When we click on a button it will go to detail

export default SearchView
