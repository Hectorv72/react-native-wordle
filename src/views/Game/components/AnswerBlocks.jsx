import React from 'react'
import WordRow from './WordRow'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import useGame from '../hooks/useGame'

const AnswerBlocks = () => {
  const { game } = useGame()
  const { blocks } = game
  return (
    <View style={styles.rows}>
      {
        blocks.map(
          block =>
            <WordRow key={`wordrow-${block.attemp}`} attemp={block.attemp} />
        )
      }
    </View>
  )
}

export default AnswerBlocks

const styles = ScaledSheet.create({
  rows: {
    gap: '10@s'
  },
})