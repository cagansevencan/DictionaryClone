import {StatusBar, Text, View} from 'react-native'
import * as React from 'react'
import Box from "../components/box";
import {useFocusEffect} from "@react-navigation/native";

function FavoriteView() {
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('dark-content');
            Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1');
        }, [])
    )

  return (
    <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites</Text>
    </Box>
  )

}

export default FavoriteView
