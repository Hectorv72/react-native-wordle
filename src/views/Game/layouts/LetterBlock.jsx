import React from 'react'
import WordVerifyColors from '../models/enum/WordVerifyColors'
import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { Motion } from '@legendapp/motion'

const LetterBlock = ({ letter = '', typeColor = null, delay = 200 }) => {

  return (
    <Motion.View
      style={styles.container}
      animate={typeColor ? styles[typeColor] : styles.initial}
      transition={{ delay }}
    >
      <Text style={styles.text}>{letter}</Text>
    </Motion.View>
  )
}

export default LetterBlock

const styles = ScaledSheet.create({
  container: {
    width: '40@s',
    height: '45@s',
    borderWidth: '2@s',
    borderRadius: '5@s',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: '20@s'
  },
  initial: {
    backgroundColor: 'rgb(227, 227, 227)',
    borderColor: 'rgb(210, 210, 210)',
  },
  correct: WordVerifyColors.CORRECT,
  good: WordVerifyColors.GOOD,
  incorrect: WordVerifyColors.INCORRECT,
})