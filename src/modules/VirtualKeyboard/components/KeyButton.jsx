import React from 'react'
import kbStyles from '../styles'
import useKeyboard from '../hooks/useKeyboard'
import { Text, TouchableHighlight } from 'react-native'

const KeyButton = ({ letter = 'A' }) => {
  const { setWrittenText, writted } = useKeyboard()
  const handleOnPress = () => setWrittenText(writted + letter)

  return (
    <TouchableHighlight style={kbStyles.button} underlayColor={kbStyles.buttonUnderlay} onPress={handleOnPress}>
      <Text style={kbStyles.buttonText}>{letter}</Text>
    </TouchableHighlight>
  )
}

export default KeyButton