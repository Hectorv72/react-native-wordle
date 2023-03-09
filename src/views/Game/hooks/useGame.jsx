import GameContext from "../context/GameContext"
import { useContext, useEffect } from "react"

export default () => {
  const { game, setGame } = useContext(GameContext)

  const updateGame = (update) => setGame(prev => ({ ...prev, ...update }))

  const verifyWord = () => {
    updateGame({ verify: true })
    if (game.blocks[game.attemp - 1].text !== game.solution) {
      setTimeout(nextTurn, 300)
    }
  }

  const nextTurn = () => {
    (game.attemp < game.limit_attempts) && updateGame({ verify: false, attemp: game.attemp + 1 })
  }

  const updateTextBlock = (position, text) => {
    const blocks = game.blocks
    blocks[position].text = text
    updateGame({ blocks })
  }

  return { game, verifyWord, updateTextBlock }
}