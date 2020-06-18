import { StatusBar, View, ScrollView } from 'react-native'
import * as React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import Box from '../components/box'
import { useFocusEffect } from '@react-navigation/native'
import Text from '../components/text'
import ActionButton from '../components/actionButton'
import { MoreHorizontal } from '../components/icons'
import { ActionTitle } from '../components/actionButton'
import DetailSummaryItemContainer from '../components/detail-summary-item'
import theme from '../utils/theme'
import { Bookmark, Sound, Hand } from '../components/icons/'
import Svg from 'react-native-svg'
import LoaderText from '../components/LoaderText'

function DetailView({ route }) {
  const keyword = route.params?.keyword
  //const keyword = 'savaş'
  const [data, setData] = React.useState(null)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1')
    }, [])
  )

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const data = await response.json()
    console.log(data[0])
    setData(data[0])
  }

  React.useEffect(() => {
    getDetailData()
  }, [])

  return (
    <Box as={SafeAreaView} bg={'softRed'} flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight={'bold'}>
            {keyword}
          </Text>
          {(data?.telaffuz || data?.lisan) ? (
            <Text color={'textLight'} mt={6}>
              {data?.telaffuz && data?.telaffuz}
              {data?.lisan}
            </Text>
          ) : null}
        </Box>
        <Box flexDirection={'row'} mt={24}>
          <ActionButton disabled={!data}>
            <Sound color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} ml={12}>
            <Bookmark width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} ml="auto">
            <Hand color={theme.colors.textLight} />
            <ActionTitle> Turk dili isareti</ActionTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          {data
            ? data.anlamlarListe.map(item => (
                <DetailSummaryItemContainer
                    key={item.anlam_sira }
                  data={item}
                  border={item.anlam_sira !== '1'}
                />
              ))
            : [1, 2, 3].map(index => (
                <DetailSummaryItemContainer key={index} border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={250} mt={10} />
                </DetailSummaryItemContainer>
              ))}

          {/* - */}
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
