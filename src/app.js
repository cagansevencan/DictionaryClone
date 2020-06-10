import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack' //In order to add pages we need a stack

import TabBar from './components/tab-bar'
import SearchView from './views/searchView'
import HistoryView from './views/history'
import FavoriteView from './views/favorite'
import DetailView from './views/detail'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import { MoreHorizontal, Left } from './components/icons'
import Button from './components/button'
import { CardContainer } from './components/card'

const HomeStack = createStackNavigator()
const Tab = createBottomTabNavigator()

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Search"
        component={SearchView}
        options={() => {
          return {
            headerShown: false
          }
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailView}
        options={({ route, navigation }) => {
          return {
            title: route.params?.title,
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              shadowColor: 'transparent'
            },
            headerLeft: () => (
              <Button height={"100%"}
                      px={20}
                      onPress={() => navigation.navigate('Search')}>
                <Left color={theme.colors.textDark} />
              </Button>
            ),
            headerRight: () => (
              <Button height={"100%"}
                      px={20}
                      onPress={() => navigation.navigate('Search')}>
                <MoreHorizontal color={theme.colors.textDark} />
              </Button>
            )
          }
        }}
      />
    </HomeStack.Navigator>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={props => <TabBar {...props} />}
          >
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
