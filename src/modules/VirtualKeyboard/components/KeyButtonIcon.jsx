import React from 'react'
import kbStyles from '../styles'
import useKeyboard from '../hooks/useKeyboard'
import { TouchableHighlight } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const KeyButtonIcon = ({ desing: Design = FontAwesome, icon = 'user' }) => {
  const { eraseWrittenText } = useKeyboard()

  return (
    <TouchableHighlight style={[kbStyles.button, kbStyles.withIcon]} underlayColor={kbStyles.buttonUnderlay} onPress={eraseWrittenText}>
      <Design name={icon} size={kbStyles.buttonIconSize} color="black" />
    </TouchableHighlight>
  )
}

export default KeyButtonIcon