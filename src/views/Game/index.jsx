import { Dimensions, Text, View } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import React, { useEffect, useState } from 'react'
import VirtualKeyboard from '../../modules/VirtualKeyboard'
import WordRow from './components/WordRow'
import { Button } from '@react-native-material/core'

const Game = () => {
  const [word, setWord] = useState('')
  const [verify, setVerify] = useState(false)
  const [settings, setSettings] = useState({})

  useEffect(() => {
    // setTimeout(() => {
    //   setSettings({ U: { background: '#32a84c' }, B: { disabled: true } })
    // }, 300)
  }, [])

  const handleSetWord = (word) => setWord(word)

  return (
    <View style={styles.block}>
      <View style={styles.rows}>
        <WordRow word={word} solution='BUENO' verify={verify} />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
      </View>
      <View>
        <VirtualKeyboard onWrite={handleSetWord} buttonsSettings={settings} />
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVerify(true)} title={'verificar'} />
        </View>
      </View>
    </View>
  )
}

export default Game

const styles = ScaledSheet.create({
  rows: {
    gap: '10@s'
  },
  block: {
    justifyContent: 'center',
    flex: 1,
    gap: '20@s'
  },
  buttonContainer: {
    marginVertical: '10@s',
    alignSelf: 'center',
    width: Dimensions.get('window').width - scale(160)
  },
  container: {
    width: '230@s',
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignSelf: 'center'
  }
})