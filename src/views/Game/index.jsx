import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import React, { useEffect, useState } from 'react'
import LetterBlock from './layouts/LetterBlock'
import VirtualKeyboard from '../../modules/VirtualKeyboard'

const Game = () => {
  const [word, setWord] = useState('')
  const [settings, setSettings] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setSettings({ U: { background: '#32a84c' }, B: { disabled: true } })
    }, 300)
  }, [])

  return (
    <View style={styles.block}>
      <View style={styles.container}>
        <LetterBlock letter={word[0] || ''} />
        <LetterBlock letter={word[1] || ''} />
        <LetterBlock letter={word[2] || ''} />
        <LetterBlock letter={word[3] || ''} />
        <LetterBlock letter={word[4] || ''} />
      </View>
      <View>
        <VirtualKeyboard onWrite={(text) => setWord(text)} buttonsSettings={settings} />
      </View>
    </View>
  )
}

export default Game

const styles = ScaledSheet.create({
  block: {
    marginTop: '20@s',
    flex: 1,
    gap: '20@s'
  },
  container: {
    width: '230@s',
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignSelf: 'center'
  }
})