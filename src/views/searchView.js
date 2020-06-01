import { ImageBackground, StatusBar, Animated } from 'react-native'
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
  const heroHeight = React.useRef(new Animated.Value(285)).current

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 84,
        duration: 200
      }).start()
    }else{
        Animated.timing(heroHeight, {
            toValue: 285,
            duration: 180
        }).start()
    }
  }, [heroHeight, isSearchFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle( isSearchFocus? 'dark-content' : 'light-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1')
    }, [isSearchFocus])
  )

  //Navigation will go inside as a property, when we call searchview
  return (
    <Box as={SafeAreaView} bg={isSearchFocus? "softRed" : "red"} flex={1}>


      <Box as={Animated.View}
           position={'relative'} zIndex={1} height={heroHeight}>
          {!isSearchFocus && (
              <Box
              as={ImageBackground}
              source={bg}
              style={{width: '100%', height: '100%'}}
              >
              <Box flex={1} alignItems={'center'} justifyContent={'center'}>
              <SvgLogo width={180} color="white" />
              </Box>
              </Box>
              )}

          <Box position={"absolute"} left={0} bottom={isSearchFocus? 0 : -42} p={16} width={'100%'} >
              <Search onChangeFocus={status => setSearchFocus(status)} />
          </Box>
      </Box>
        {/* content */}
        <Box flex={1} bg="white" pt={isSearchFocus? 0 : 26}>
        {isSearchFocus ? (
            <Box p={30} flex={1}>
                <Text> History </Text>
            </Box>
        ):(
        <Box p={30} flex={1}>
          <Text> Recommendations </Text>
        </Box>
            )}
      </Box>
    </Box>
  )
}
//When we click on a button it will go to detail

export default SearchView
