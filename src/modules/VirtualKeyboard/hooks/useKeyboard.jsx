import { useContext } from "react"
import KeyboardContext from "../contexts/KeyboardContext"

export default () => {
  const { data, setData } = useContext(KeyboardContext)
  const { writted, buttons, limit } = data

  const setWrittenText = (text) => {
    if (writted.length < limit) {
      const newData = { ...data }
      newData.writted = text
      setData(newData)
    }
  }

  const eraseWrittenText = () => {
    if (writted.length > 0) {
      const newData = { ...data }
      newData.writted = writted.slice(0, -1)
      setData(newData)
    }
  }

  return { writted, buttons, limit, setWrittenText, eraseWrittenText }
}