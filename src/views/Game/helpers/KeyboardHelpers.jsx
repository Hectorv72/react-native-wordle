import { View } from "react-native"
import { ScaledSheet } from 'react-native-size-matters'
import KeyButton from "../layouts/KeyButton"
import KeyEraseButton from "../layouts/KeyEraseButton"
import KeySendButton from "../layouts/KeySendButton"

const makeKey = (letter) => {
  if (letter === 'erase') {
    return <KeyEraseButton key={'keyboard-eraser'} />
  } else if (letter === 'send') {
    return <KeySendButton key={'keyboard-send'} />
  } else {
    return <KeyButton key={`keyboard-letter-${letter}`} letter={letter} />
  }
}

export const makeRow = (letters = []) => {
  const list = []

  for (let letter of letters) {
    list.push(makeKey(letter))
  }

  return (<View key={`row-keyboard-${letters.toString()}`} style={styles.row}>{list}</View>)
}

const styles = ScaledSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: '5@s',
    justifyContent: 'center'
  },
})