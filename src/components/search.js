import Box from './box'
import React from 'react'
import Input from './input'
import SvgSearch from './icons/Search'
import theme from '../utils/theme'
import Text from './text'
import Button from './button'
import { Keyboard } from 'react-native'
import { Close } from './icons'


function SearchBox() {
    //Bit confused with these 2 following calls
  const [isFocus, setFocus] = React.useState(false)
    const [value, setValue] = React.useState("")

  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }

    const onClear = () => {
        setValue("")
        Keyboard.dismiss()
    }

  return (
    <Box flexDirection="row" alignItems={'center'}>
      <Box position="relative" flex={1}>
        <Input
          //clearButtonMode={'always'}
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.15,
            elevation: 0,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4
            }
          }}
          bg={'white'}
          height={52}
          color={'textDark'}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
          placeholder={"Turkce Sozluk'te Ara"}
          placeholderTextColor="textMedium"
          pl={52}
          borderRadius="normal"
          value={value}
          onFocus={() => setFocus(true)}
          onChangeText={text=>setValue(text)}
        />
          {value.length > 0 &&
              <Button position="absolute" right={16} top={14}
                      onPress={onClear}>
                  <Close stroke={theme.colors.textDark}/>
              </Button>
          }
        <Button position="absolute" left={16} top={14}>
          <SvgSearch color={theme.colors.textMedium} />
        </Button>
      </Box>
        <Box>
        {isFocus && (
          <Button onPress={onCancel} px={15} height={52}>
            <Text>Vazgec</Text>
          </Button>
        )}
        </Box>
    </Box>
  )
}
export default SearchBox
