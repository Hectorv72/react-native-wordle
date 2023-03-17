import kbStyles from "../styles"
import KeyButton from "../components/KeyButton"
import KeyButtonIcon from "../components/KeyButtonIcon"
import { FlatList, View } from "react-native"
import { FontAwesome5, Ionicons } from "@expo/vector-icons"

const makeKey = ({ item: letter }) => {
  if (letter === 'eraser') {
    return <KeyButtonIcon key={'keyboard-eraser'} desing={FontAwesome5} icon='eraser' />
  } else if (letter === 'send') {
    return <KeyButtonIcon key={'keyboard-send'} desing={Ionicons} icon='send' />
  } else {
    return <KeyButton key={`keyboard-letter-${letter}`} letter={letter} />
  }
}

const makeRow = (letters = []) => {
  return (
    <FlatList key={`row-keys-${letters.toString()}`} horizontal data={letters} renderItem={makeKey} />
  )
}

export const makeKeyboard = () => {
  const bottomKeys = 'ZXCVBNM'.split('')

  return ([
    makeRow('QWERTYUIOP'.split('')),
    makeRow('ASDFGHJKL'.split('')),
    makeRow([...bottomKeys, 'eraser'])
  ])
}