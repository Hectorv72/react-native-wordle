import kbStyles from "../styles"
import KeyButton from "../components/KeyButton"
import KeyButtonIcon from "../components/KeyButtonIcon"
import { View } from "react-native"
import { FontAwesome5, Ionicons } from "@expo/vector-icons"

const makeKey = (letter) => {
  if (letter === 'eraser') {
    return <KeyButtonIcon key={'keyboard-eraser'} desing={FontAwesome5} icon='eraser' />
  } else if (letter === 'send') {
    return <KeyButtonIcon key={'keyboard-send'} desing={Ionicons} icon='send' />
  } else {
    return <KeyButton key={`keyboard-letter-${letter}`} letter={letter} />
  }
}

const makeRow = (letters = []) => {
  const list = letters.map(letter => makeKey(letter))
  return (<View key={`row-keyboard-${letters.toString()}`} style={kbStyles.keyboardRow}>{list}</View>)
}

export const makeKeyboard = () => {
  const bottomKeys = 'ZXCVBNM'.split('')

  return ([
    makeRow('QWERTYUIOP'.split('')),
    makeRow('ASDFGHJKL'.split('')),
    makeRow([...bottomKeys, 'eraser'])
  ])
}