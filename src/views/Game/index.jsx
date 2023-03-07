import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import React from 'react'
import LetterBlock from './layouts/LetterBlock'
import Keyboard from './components/Keyboard'

const Game = () => {
  return (
    // <View style={styles.container}>
    //   <LetterBlock letter='B' />
    //   <LetterBlock letter='U' />
    //   <LetterBlock letter='E' />
    //   <LetterBlock letter='N' />
    //   <LetterBlock letter='O' />
    // </View>
    <View>
      <Keyboard />
    </View>
  )
}

export default Game

const styles = ScaledSheet.create({
  container: {
    width: '230@s',
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignSelf: 'center'
  }
})