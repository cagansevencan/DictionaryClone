import { StatusBar, View, ScrollView } from 'react-native'
import * as React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import Box from '../components/box'
import { useFocusEffect } from '@react-navigation/native'
import Text from '../components/text'
import ActionButton from '../components/actionButton'
import { MoreHorizontal } from '../components/icons'
import { ActionTitle } from '../components/actionButton'
import {DetailSummaryItemContainer, DetailSummaryItemTitle, DetailSummaryItemSummary} from '../components/detail-summary-item'
import theme from "../utils/theme";
import {Bookmark, BookmarkSolid, Sound, Hand} from "../components/icons/"
import Svg from "react-native-svg";

function DetailView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1')
    }, [])
  )

  return (
    <Box as={SafeAreaView} bg={'softRed'}  flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
        <Text fontSize={32} fontWeight={'bold'}>
          Detail
        </Text>
        <Text color={'textLight'} mt={6}>
          Arapca Kalem
        </Text>
      </Box>
      <Box flexDirection={'row'} mt={24}>
          <ActionButton>
              <Sound color={theme.colors.textLight}/>
          </ActionButton>
          <ActionButton ml={12}>
              <BookmarkSolid width={24} height={21} color={"red"}/>
          </ActionButton>
        <ActionButton ml="auto"  >
          <Hand color={theme.colors.textLight} />
          <ActionTitle> Turk dili isareti</ActionTitle>
        </ActionButton>
      </Box>
        <Box mt={32}>
            <DetailSummaryItemContainer>
            <DetailSummaryItemTitle>
                Yazma, cizme vb. islerde kullanilan cesitli bicimlerde arac:
            </DetailSummaryItemTitle>
                <DetailSummaryItemSummary>
                    "Kagit, kalem, murekkep, hepsi masanin ustundedir"
                </DetailSummaryItemSummary>
            </DetailSummaryItemContainer>
            <DetailSummaryItemContainer border >
                <DetailSummaryItemTitle>
                    Yazma, cizme vb. islerde kullanilan cesitli bicimlerde arac:
                </DetailSummaryItemTitle>
                <DetailSummaryItemSummary>
                    "Kagit, kalem, murekkep, hepsi masanin ustundedir"
                </DetailSummaryItemSummary>
            </DetailSummaryItemContainer>
            <DetailSummaryItemContainer border >
                <DetailSummaryItemTitle>
                    Yazma, cizme vb. islerde kullanilan cesitli bicimlerde arac:
                </DetailSummaryItemTitle>
                <DetailSummaryItemSummary>
                    "Kagit, kalem, murekkep, hepsi masanin ustundedir"
                </DetailSummaryItemSummary>
            </DetailSummaryItemContainer>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
