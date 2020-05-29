import Box from "./box";
import React from "react";
import Input from "./input";
import SvgSearch from "./icons/Search";
import theme from "../utils/theme";
import Text from "./text";
import Button from "./button";
import {Keyboard} from 'react-native'



function SearchBox(){
    const[isFocus, setFocus] = React.useState(false)

    const onCancel = ()=>{
        setFocus(false)
        Keyboard.dismiss()
    }

    return <Box position={"relative"} flexDirection="row" alignItems={"center"}>
        <Input
            style={{
                shadowColor: "#000",
                shadowOpacity: 0.2,
                elevation: 0,
                shadowRadius: 24,
                shadowOffset: {
                    width: 0,
                    height: 4,
                }
            }}
               flex={1}
               bg={"white"}
               height={52}
               color={"textDark"}
               borderColor={isFocus ? '#D1D1D1' : 'transparent'}
               placeholder={"Turkce Sozluk'te Ara"}
               placeholderTextColor= "textMedium"
               pl={52}
               borderRadius="normal"
               onFocus={()=>setFocus(true)}
        />
        <Box
            style={{pointerEvents: 'none'}}
            position="absolute"
            left={16}
            top={14}
        >
            <SvgSearch
                color={theme.colors.textMedium}/>
        </Box>
        <Box>
        {isFocus &&(
            <Button onPress={onCancel}
                px={15} height={52}>
                <Text>Vazgec</Text>
            </Button>
        )}
        </Box>
    </Box>
}
export default SearchBox
