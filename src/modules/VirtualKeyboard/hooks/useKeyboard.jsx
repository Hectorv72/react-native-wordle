import { useContext } from "react"
import KeyboardContext from "../contexts/KeyboardContext"

export default () => {
  const { written, setWritten, settings } = useContext(KeyboardContext)
  const { buttons, limit } = settings

  const setWrittenText = (text) => {
    if (written.length < limit) {
      setWritten(text)
    }
  }

  const eraseWrittenText = () => {
    if (written.length > 0) {
      setWritten(written.slice(0, -1))
    }
  }

  return { written, buttons, limit, setWrittenText, eraseWrittenText }
}