import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import React from 'react'
import LetterBlock from './layouts/LetterBlock'
import VirtualKeyboard from '../../modules/VirtualKeyboard'

const Game = () => {
  return (
    <View style={styles.block}>
      <View style={styles.container}>
        <LetterBlock letter='B' />
        <LetterBlock letter='U' />
        <LetterBlock letter='E' />
        <LetterBlock letter='N' />
        <LetterBlock letter='O' />
      </View>
      <View>
        <VirtualKeyboard onWrite={(text) => console.log(text)} />
      </View>
    </View>
  )
}

export default Game

const styles = ScaledSheet.create({
  block: {
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