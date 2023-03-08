import React, { useEffect, useState } from 'react'
import { View, Dimensions } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import { makeKeyboard } from './helpers/KeyboardHelpers'
import KeyboardContext from './contexts/KeyboardContext'

export const defaultContextData = {
  writted: '', // texto escrito con el virtualkeyboard
  limit: 5,
  darkened: [], // botones que tienen fondo oscuro
  success: [] // botones que tienen fondo de color
}

const VirtualKeyboard = ({ onWrite = null }) => {
  const keys = makeKeyboard()
  const [data, setData] = useState(defaultContextData)

  useEffect(() => {
    onWrite && onWrite(data.writted)
  }, [data.writted])

  return (
    <KeyboardContext.Provider value={{ data, setData }}>
      <View style={styles.container}>
        {keys}
      </View>
    </KeyboardContext.Provider>
  )
}

export default VirtualKeyboard

const styles = ScaledSheet.create({
  container: {
    // position: 'absolute',
    // top: Dimensions.get('window').height - scale(220),
    // alignSelf: 'center'
  },
})