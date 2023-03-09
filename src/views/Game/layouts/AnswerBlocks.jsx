import React from 'react'
import WordRow from '../components/WordRow'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

const AnswerBlocks = () => {
  return (
    <View style={styles.rows}>
      <WordRow attemp={1} />
      <WordRow attemp={2} />
      <WordRow attemp={3} />
      <WordRow attemp={4} />
      <WordRow attemp={5} />
      <WordRow attemp={6} />
    </View>
  )
}

export default AnswerBlocks

const styles = ScaledSheet.create({
  rows: {
    gap: '10@s'
  },
})