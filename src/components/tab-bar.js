import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Button from './button'
import { Search, Bookmark, RotateCcw } from './icons'
import Box from './box'

import theme from '../utils/theme'

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }
        /*const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };*/

        return label === 'Search' ? (
            //Search button
          <Box key={label} p={15} mt={-15} bg="white" borderRadius="full">
            <Button
              size={56}
              borderRadius="full"
              bg={'red'}
              borderColor="black"
              onPress={onPress}
            >
              <Search stroke={'white'} />
            </Button>
          </Box>
        ) : (
          //Anything besides Search then proceed
            //Tab Button
          <Button
            key={label}
            pt={9} //Padding from top
            flexDirection={'column'}
            height={56}
            flex={1}
            onPress={onPress}
          >
            {label === 'History' && <RotateCcw color={isFocused? theme.colors.textDark : theme.colors.textLight} />}
            {label === 'Favorite' && <Bookmark color={isFocused? theme.colors.textDark : theme.colors.textLight} />}
            {/* Indicator */}
            <Box size={4} bg={isFocused ? 'red' : 'white'} mt={6} borderRadius={"full"}/>
          </Button>
        )
      })}
    </View>
  )
}

export default TabBar
