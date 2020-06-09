import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgBookmarkSolid(props) {
  return (
    <Svg
      width={32}
      height={32}
      fill="currentColor"
      viewBox="0 0 32 32"
      className=""
      {...props}
    >
      <Path d="M6 0v32l10-10 10 10V0z" />
    </Svg>
  )
}

export default SvgBookmarkSolid
