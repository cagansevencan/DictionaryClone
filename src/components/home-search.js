import {Animated} from "react-native";
import Box from "./box";
import SvgLogo from "./icons/Logo";
import Search from "./search";
import * as React from 'react'
import Bg from "./bg";

const HERO_HEIGHT = 230

function HomeSearch({isSearchFocus, onSearchFocus}){

    const [bgOpacity] = React.useState(new Animated.Value(1))
    const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT))
    React.useEffect(() => {
        if (isSearchFocus) {
            // bg opacity
            Animated.timing(bgOpacity, {
                toValue: 0,
                duration: 200
            }).start()
            //hero-height
            Animated.timing(heroHeight, {
                toValue: 84,
                duration: 200
            }).start()
        } else {
            // bg opacity
            Animated.timing(bgOpacity, {
                toValue: 1,
                duration: 200
            }).start()

            // hero-height
            Animated.timing(heroHeight, {
                toValue: HERO_HEIGHT,
                duration: 180
            }).start()
        }
    }, [bgOpacity, heroHeight, isSearchFocus])
    return (
      <Box
        as={Animated.View}
        position={'relative'}
        zIndex={1}
        height={heroHeight}
      >
        <Box mt={-50} as={Animated.View} style={{ opacity: bgOpacity }}>
          <Bg>
            <Box
              mt={30}
              flex={1}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <SvgLogo width={120} color="white" />
            </Box>
          </Bg>
        </Box>
        {/* search */}
        <Box
          position={'absolute'}
          left={0}
          bottom={isSearchFocus ? 0 : -42}
          p={16}
          width={'100%'}
        >
          <Search onChangeFocus={status => onSearchFocus(status)} />
        </Box>
      </Box>
    )
}

export default HomeSearch
