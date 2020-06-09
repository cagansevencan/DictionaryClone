import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgHand(props) {
  return (
    <Svg
      width={32}
      height={32}
      fill="currentColor"
      viewBox="0 0 32 32"
      className=""
      {...props}
    >
      <Path d="M30 19v-5a3.004 3.004 0 00-4.472-2.614 3 3 0 00-4.528-.62 2.987 2.987 0 00-3-.595V3c0-1.654-1.346-3-3-3s-3 1.346-3 3v12.334l-5.501-2.932A3.004 3.004 0 002 15.001c0 .824.327 1.592.922 2.163l.023.022 7.474 6.815H9a1 1 0 00-1 1v6a1 1 0 001 1h20a1 1 0 001-1v-6a1 1 0 00-1-1h-1.382l2.276-4.553c.069-.139.106-.292.106-.447zm-2 8a1 1 0 11-2 0 1 1 0 012 0zm0-8.236L25.382 24H13.387l-9.088-8.286a1.002 1.002 0 011.18-1.592c.017.01.033.02.051.029l7 3.732a1 1 0 001.47-.882v-14c0-.551.449-1 1-1s1 .449 1 1v10a1 1 0 002 0c0-.551.449-1 1-1s1 .449 1 1a1 1 0 002 0c0-.551.449-1 1-1s1 .449 1 1v1a1 1 0 002 0c0-.551.449-1 1-1s1 .449 1 1v4.764z" />
    </Svg>
  )
}

export default SvgHand
