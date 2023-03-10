import React from 'react'
import useGame from '../hooks/useGame'
import VirtualKeyboard from '../../../modules/VirtualKeyboard'

const GameKeyboard = () => {
  const { game, updateTextBlock } = useGame()
  const { attemp, blocks } = game

  const handleUpdateText = (text) => !game.verify && updateTextBlock(attemp - 1, text)

  return (
    <VirtualKeyboard written={blocks[attemp - 1].text} setWritten={handleUpdateText} buttonsSettings={game.keyboard} />
  )
}

export default GameKeyboard