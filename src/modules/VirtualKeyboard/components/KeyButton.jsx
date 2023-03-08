import React, { useEffect, useState } from 'react'
import kbStyles from '../styles'
import useKeyboard from '../hooks/useKeyboard'
import { Text, TouchableHighlight } from 'react-native'

const defaultSettings = {
  background: null,
  disabled: false
}

const KeyButton = ({ letter = 'A' }) => {
  const { setWrittenText, writted, buttons } = useKeyboard()
  const [settings, setSettings] = useState(defaultSettings)
  const [styles, setStyles] = useState(kbStyles.button)

  const handleOnPress = () => setWrittenText(writted + letter)

  useEffect(() => {
    if (buttons[letter]) {
      const { background, disabled } = buttons[letter]
      if (background || disabled) {
        setStyles([kbStyles.button, { backgroundColor: !disabled ? background : '#6b6b6b' }])
      } else {
        setStyles(kbStyles.button)
      }
      setSettings(buttons[letter])
    }
  }, [buttons])

  return (
    <TouchableHighlight disabled={settings?.disabled} style={styles} underlayColor={kbStyles.buttonUnderlay} onPress={handleOnPress}>
      <Text style={kbStyles.buttonText}>{letter}</Text>
    </TouchableHighlight>
  )
}

export default KeyButton