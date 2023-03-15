import React, { useEffect, useState } from 'react'
import useGame from '../hooks/useGame'
import WordColors from '../models/enum/WordColors'
import LetterBlock from '../layouts/LetterBlock'
import LetterBlockTypes from '../models/enum/LetterBlockTypes'
import { FlatList, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

const WordRow = ({ attemp }) => {
  const { game, changeKeyboardColor } = useGame()
  const [colors, setColors] = useState([])

  const handleChangeKeyboardColor = (blocks) => {
    const keyboardColors = blocks.map(({ letter, color }) => {
      const typeColor = color.toUpperCase()
      return { letter, color: WordColors[typeColor] }
    })
    changeKeyboardColor(keyboardColors)
  }

  const handleVerifyWord = () => {
    const text = game.blocks[attemp - 1].text
    const blockColors = text.split('').map(
      (letter, position) => ({
        position,
        letter,
        color: letter === game.solution[position] ? LetterBlockTypes.CORRECT : LetterBlockTypes.INCORRECT
      })
    );

    const letterCorrects = blockColors
      .filter(block => block.color === LetterBlockTypes.CORRECT)
      .map(block => block.letter)

    const blockIncorrect = blockColors.filter(block => block.color === LetterBlockTypes.INCORRECT)

    blockIncorrect.forEach(
      ({ letter, position }) => {
        if (game.solution.includes(letter) && !letterCorrects.includes(letter)) {
          blockColors[position].color = LetterBlockTypes.GOOD
        }
      }
    )

    setColors(blockColors)
    const timer = game.limitAttempts * game.delayAnimation
    setTimeout(() => handleChangeKeyboardColor(blockColors), timer + 200)
  }

  useEffect(() => {
    (game.verify && game.attemp === attemp) && handleVerifyWord()
  }, [game.verify])

  const renderItem = ({ index }) =>
    <View style={styles.block}>
      <LetterBlock letter={game.blocks[attemp - 1].text[index]} typeColor={colors[index]?.color} delay={(index + 1) * game.delayAnimation} />
    </View>

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={(new Array(game.limitWords))}
        renderItem={renderItem}
        contentContainerStyle={styles.row}
      />
    </View>
  )
}

export default WordRow

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center'
  },
  row: {
    justifyContent: 'center'
  },
  block: {
    marginHorizontal: '5@s'
  }
})