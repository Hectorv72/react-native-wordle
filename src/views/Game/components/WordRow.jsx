import React, { useEffect, useState } from 'react'
import useGame from '../hooks/useGame'
import WordColors from '../models/enum/WordColors'
import LetterBlock from '../layouts/LetterBlock'
import LetterBlockTypes from '../models/enum/LetterBlockTypes'
import { View } from 'react-native'
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

  return (
    <View style={styles.container}>
      <LetterBlock letter={game.blocks[attemp - 1].text[0]} typeColor={colors[0]?.color} position={1} delay={1 * game.delayAnimation} />
      <LetterBlock letter={game.blocks[attemp - 1].text[1]} typeColor={colors[1]?.color} position={2} delay={2 * game.delayAnimation} />
      <LetterBlock letter={game.blocks[attemp - 1].text[2]} typeColor={colors[2]?.color} position={3} delay={3 * game.delayAnimation} />
      <LetterBlock letter={game.blocks[attemp - 1].text[3]} typeColor={colors[3]?.color} position={4} delay={4 * game.delayAnimation} />
      <LetterBlock letter={game.blocks[attemp - 1].text[4]} typeColor={colors[4]?.color} position={5} delay={5 * game.delayAnimation} />
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