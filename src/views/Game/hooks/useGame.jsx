import GameContext from "../context/GameContext"
import { useContext } from "react"
import WordColors from "../models/enum/WordColors"

export default () => {
  const { game, setGame } = useContext(GameContext)

  const updateGame = (update) => setGame(prev => ({ ...prev, ...update }))

  const nextTurn = () => updateGame({ verify: false, attemp: game.attemp + 1 })

  const verifyWord = () => {
    updateGame({ verify: true })
    if (game.blocks[game.attemp - 1].text !== game.solution) {
      if (game.attemp < game.limitAttempts) {
        return setTimeout(() => nextTurn(), 300)
      }
    }
    updateGame({ gameOver: true })
  }

  const updateTextBlock = (position, text) => {
    const blocks = game.blocks
    blocks[position].text = text
    updateGame({ blocks })
  }

  const changeKeyboardColor = (colors = []) => {
    const keyboard = {}

    const keysModifiables = Object.entries(game.keyboard)
      .filter(([_, value]) => value.background !== WordColors.CORRECT)
      .map(([_, value]) => value)
    console.log(keysModifiables)

    const keysColored = colors.filter(({ letter }) => !keysModifiables.includes(letter))
    keysColored.forEach(({ letter, color }) => { keyboard[letter] = { background: color } })
    updateGame({ keyboard })
  }

  return { game, verifyWord, updateTextBlock, changeKeyboardColor }
}