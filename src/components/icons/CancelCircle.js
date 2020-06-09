import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgCancelCircle(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" className="" {...props}>
      <Path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29C8.82 29 3 23.18 3 16S8.82 3 16 3s13 5.82 13 13-5.82 13-13 13z" />
      <Path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z" />
    </Svg>
  )
}

export default SvgCancelCircle
