import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import {
  compose,
  color,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
  borderColor
} from 'styled-system'

const Button = styled(TouchableOpacity)(
  compose(
    color,
    size,
    space,
    flexbox,
    layout,
    borderRadius,
    borderColor
  )
)

Button.defaultProps = {
  flexDirection: 'row', //making sure icons appear horizontally
  alignItems: 'center',
  justifyContent: 'center' //no matter the row size stay in the middle
}

export default Button
