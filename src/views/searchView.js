import { StatusBar } from 'react-native'
import * as React from 'react'

import Box from '../components/box'

import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/core'
import SuggestionCard from '../components/suggestion-card'
import SearchHistoryList from '../components/latest-history-list'
import HomeSearch from '../components/home-search'

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
  const [homeData, setHomeData] = React.useState(null) //when data received first let it be an empty object

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik')
    const data = await response.json()
    setHomeData(data)
  }

  React.useEffect(() => {
    getHomeData() //start this method when the page is loaded initally
  })

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1')
    }, [isSearchFocus])
  )

  //Navigation will go inside as a property, when we call searchview
  return (
    <Box as={SafeAreaView} bg={'softRed'} flex={1}>
      <HomeSearch
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />

      {/* content */}
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box py={40} px={16} flex={1}>
            <SuggestionCard
              title={'Bir Kelime'}
              data={homeData?.kelime[0]}
              onPress={() => navigation.navigate('Detail')}
            />

            <SuggestionCard
              mt={40}
              title={'Bir Deyim - Atasozu'}
              data={homeData?.atasoz[0]}
              onPress={() => navigation.navigate('Detail')}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}
//When we click on a button it will go to detail

export default SearchView
