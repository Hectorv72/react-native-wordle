import React, { useState } from 'react'
import GameContext from './context/GameContext'
import AnswerBlocks from './components/AnswerBlocks'
import ButtonVerify from './components/ButtonVerify'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import generateBlocksAttribute from './helpers/generateBlocksAttribute'
import GameKeyboard from './components/GameKeyboard'

const Game = () => {
  const generateDefaultGame = () => ({
    solution: 'BUENO',
    verify: false,
    keyboard: {},
    attemp: 1,
    limit_attempts: 6,
    limitWords: 5,
    game_over: false,
    blocks: generateBlocksAttribute(6)
  })

  const [game, setGame] = useState(generateDefaultGame())
  const context = {
    game,
    setGame
  }

  return (
    <View style={styles.block}>
      <GameContext.Provider value={context}>
        <AnswerBlocks />
        <View>
          <GameKeyboard />
          <ButtonVerify />
        </View>
      </GameContext.Provider>
    </View>
  )
}

export default Game

const styles = ScaledSheet.create({
  block: {
    justifyContent: 'center',
    flex: 1,
    gap: '20@s'
  }
})