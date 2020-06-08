import {StatusBar, Text, View} from 'react-native'
import * as React from 'react'
import SafeAreaView from "react-native-safe-area-view";
import Box from "../components/box";
import {useFocusEffect} from "@react-navigation/native";

function DetailView() {
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('dark-content');
            Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1');
        }, [])
    )

    return (
      <Box as={SafeAreaView} bg={"softRed"} flex={1}>
          <Text>Detail</Text>
      </Box>
  )
}

export default DetailView
