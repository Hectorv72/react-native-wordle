import React, { useEffect, useState } from 'react'
import GameContext from './context/GameContext'
import AnswerBlocks from './components/AnswerBlocks'
import ButtonVerify from './components/ButtonVerify'
import GameKeyboard from './components/GameKeyboard'
import generateBlocksAttribute from './helpers/generateBlocksAttribute'
import { Alert, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import getItemAleatory from '../../helpers/getItemAleatory'
import WordsList from './utilities/WordsList'

const Game = ({ navigation }) => {
  const generateDefaultGame = () => ({
    solution: getItemAleatory(WordsList),
    verify: false,
    keyboard: {},
    attemp: 1,
    limitAttempts: 6,
    limitWords: 5,
    delayAnimation: 200,
    gameOver: false,
    blocks: generateBlocksAttribute(6)
  })

  const [game, setGame] = useState(generateDefaultGame())
  const context = {
    game,
    setGame
  }

  useEffect(() => {
    if (game.gameOver) {
      Alert.alert('GAME OVER', '¿Quieres volver a jugar?', [
        {
          text: 'SI',
          onPress: () => setGame(generateDefaultGame()),
        },
        {
          text: 'NO',
          onPress: () => navigation.navigate('main'),
          style: 'cancel'
        }
      ])
    }
  }, [game.gameOver])

  return (
    !game.gameOver &&
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