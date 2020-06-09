import { StatusBar, Animated, FlatList } from 'react-native'
import * as React from 'react'

import Box from '../components/box'
import Bg from '../components/box'
import SvgLogo from '../components/icons/Logo'
import Search from '../components/search'

import SafeAreaView from 'react-native-safe-area-view'
import Text from '../components/text'
import { CardSummary, CardTitle, CardContainer } from '../components/card'
import { useFocusEffect } from '@react-navigation/core'
import { SimpleCardContainer, SimpleCardTitle } from '../components/simple-card'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    summary: 'Hey 1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    summary: 'Hey 2'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    summary: 'Hey 3'
  }
]

const HERO_HEIGHT = 230

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const [bgOpacity] = React.useState(new Animated.Value(1))
  const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT))

  React.useEffect(() => {
    if (isSearchFocus) {
      // bg opacity
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 200
      }).start()
      //hero-height
      Animated.timing(heroHeight, {
        toValue: 84,
        duration: 200
      }).start()
    } else {
      // bg opacity
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 200
      }).start()

      // hero-height
      Animated.timing(heroHeight, {
        toValue: HERO_HEIGHT,
        duration: 180
      }).start()
    }
  }, [bgOpacity, heroHeight, isSearchFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1')
    }, [isSearchFocus])
  )

  //Navigation will go inside as a property, when we call searchview
  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      <Box
        as={Animated.View}
        position={'relative'}
        zIndex={1}
        height={heroHeight}
      >
        <Box mt={60} as={Animated.View} opacity={bgOpacity}>
          <Bg mt={44}>
            <Box flex={1} alignItems={'center'} justifyContent={'center'}>
              <SvgLogo width={120} color="white" />
            </Box>
          </Bg>
        </Box>

        <Box
          position={'absolute'}
          left={0}
          bottom={isSearchFocus ? 0 : -42}
          p={16}
          width={'100%'}
        >
          <Search onChangeFocus={status => setSearchFocus(status)} />
        </Box>
      </Box>
      {/* content */}
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box  flex={1}>
             <FlatList
              style={{padding: 16}}
              data={DATA}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Box py={6}>
                  <SimpleCardContainer>
                    <SimpleCardTitle> {item.title} </SimpleCardTitle>
                  </SimpleCardContainer>
                </Box>
              )}
              ListHeaderComponent={<Text color={'textLight'} mb={10}>Son Arananlar </Text>}
            />
          </Box>
        ) : (
          <Box py={40} px={16} flex={1}>
            <Box>
              <Text color={'textLight'}> Bir Deyim </Text>
              <CardContainer
                mt={10}
                onPress={() => navigation.navigate('Detail', {title:"on para"} )}
              >
                <CardTitle>on para </CardTitle>
                <CardSummary>cok az (para).</CardSummary>
              </CardContainer>
            </Box>

            <Box mt={40}>
              <Text color={'textLight'}>Bir deyim - Atasozu</Text>
              <CardContainer
                mt={10}
                onPress={() => navigation.navigate('Detail', {title:"Siyem"})}
              >
                <CardTitle>siyem siyem aglamak </CardTitle>
                <CardSummary>
                  hafif hafif, ince ince durmadan gozyasi dokmek.
                </CardSummary>
              </CardContainer>
            </Box>


          </Box>
        )}
      </Box>
    </Box>
  )
}
//When we click on a button it will go to detail

export default SearchView
