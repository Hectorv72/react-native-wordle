import React, { useEffect, useState } from 'react'
import LetterBlock from '../layouts/LetterBlock'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import LetterBlockTypes from '../models/enum/LetterBlockTypes'

const WordRow = ({ word = '', solution = '', verify = false }) => {
  const [colors, setColors] = useState([])

  const handleVerifyWord = () => {
    const blockColors = []
    for (let position in word) {
      blockColors.push({
        position: position,
        letter: word[position],
        color: word[position] === solution[position] ? LetterBlockTypes.CORRECT : LetterBlockTypes.INCORRECT
      })
    }

    for (let block of blockColors.filter(block => block.color === LetterBlockTypes.INCORRECT)) {
      if (solution.includes(block.letter)) {
        blockColors[block.position].color = LetterBlockTypes.GOOD
      }
    }

    setColors(blockColors)
  }

  useEffect(() => {
    if (verify) {
      handleVerifyWord()
    }
  }, [verify])

  return (
    <View style={styles.container}>
      <LetterBlock letter={word[0] || ''} typeColor={colors[0]?.color} />
      <LetterBlock letter={word[1] || ''} typeColor={colors[1]?.color} />
      <LetterBlock letter={word[2] || ''} typeColor={colors[2]?.color} />
      <LetterBlock letter={word[3] || ''} typeColor={colors[3]?.color} />
      <LetterBlock letter={word[4] || ''} typeColor={colors[4]?.color} />
    </View>
  )
}

export default WordRow

const styles = ScaledSheet.create({
  container: {
    width: '230@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  }
})