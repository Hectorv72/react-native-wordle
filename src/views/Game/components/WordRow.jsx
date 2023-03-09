import React, { useEffect, useState } from 'react'
import LetterBlockTypes from '../models/enum/LetterBlockTypes'
import LetterBlock from '../layouts/LetterBlock'
import useGame from '../hooks/useGame'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

const WordRow = ({ attemp }) => {
  const { game } = useGame()
  const [colors, setColors] = useState([])

  const handleVerifyWord = () => {
    const text = game.blocks[attemp - 1].text
    const blockColors = text.split('').map(
      (letter, position) => ({
        position,
        letter,
        color: letter === game.solution[position] ? LetterBlockTypes.CORRECT : LetterBlockTypes.INCORRECT
      })
    )

    const blockIncorrect = blockColors.filter(block => block.color === LetterBlockTypes.INCORRECT)

    blockIncorrect.forEach(
      ({ letter, position }) => {
        if (game.solution.includes(letter)) {
          blockColors[position].color = LetterBlockTypes.GOOD
        }
      }
    )

    setColors(blockColors)
  }

  useEffect(() => {
    (game.verify && game.attemp === attemp) && handleVerifyWord()
  }, [game.verify])

  return (
    <View style={styles.container}>
      <LetterBlock letter={game.blocks[attemp - 1].text[0]} typeColor={colors[0]?.color} />
      <LetterBlock letter={game.blocks[attemp - 1].text[1]} typeColor={colors[1]?.color} />
      <LetterBlock letter={game.blocks[attemp - 1].text[2]} typeColor={colors[2]?.color} />
      <LetterBlock letter={game.blocks[attemp - 1].text[3]} typeColor={colors[3]?.color} />
      <LetterBlock letter={game.blocks[attemp - 1].text[4]} typeColor={colors[4]?.color} />
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