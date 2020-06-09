import {StatusBar, Text} from 'react-native'
import * as React from 'react'
import Box from "../components/box";
import SafeAreaView from "react-native-safe-area-view";
import {useFocusEffect} from "@react-navigation/native";

function HistoryView() {
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('dark-content');
            Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1');
        }, [])
    )

  return (
    <Box as={SafeAreaView} flex={1} style={{justifyContent: 'center', alignItems: 'center'} }  >
      <Text>History</Text>
    </Box>
  )
}

export default HistoryView
