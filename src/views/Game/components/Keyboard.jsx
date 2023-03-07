import { View, Dimensions } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import React, { useEffect, useState } from 'react'
import { makeRow } from '../helpers/KeyboardHelpers'

const Keyboard = (onWrite = null) => {
  const [keys, setKeys] = useState([]);
  const [writed, setWrited] = useState('')

  const handleMakeKeys = () => {
    const bottomKeys = 'ZXCVBNM'.split('')

    setKeys([
      makeRow('QWERTYUIOP'),
      makeRow('ASDFGHJKL'),
      makeRow(['erase', ...bottomKeys, 'send'])
    ])
  }

  useEffect(() => {
    handleMakeKeys()
  }, [])

  return (
    <View style={styles.container}>
      {keys}
    </View>
  )
}

export default Keyboard

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    top: Dimensions.get('window').height - scale(220),
    alignSelf: 'center'
  },
})