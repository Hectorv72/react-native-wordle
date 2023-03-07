import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import React, { useEffect, useState } from 'react'
import KeyButton from '../layouts/KeyButton'
import KeyEraseButton from '../layouts/KeyEraseButton'
import KeySendButton from '../layouts/KeySendButton'

const Keyboard = () => {
  const [keys, setKeys] = useState([]);

  const makeKey = (letter) => {
    if (letter === 'erase') {
      return <KeyEraseButton key={'keyboard-eraser'} />
    } else if (letter === 'send') {
      return <KeySendButton key={'keyboard-send'} />
    } else {
      return <KeyButton key={`keyboard-letter-${letter}`} letter={letter} />
    }
  }

  const makeRow = (letters) => {
    const list = []

    for (let letter of letters) {
      list.push(makeKey(letter))
    }

    return (<View style={styles.row}>{list}</View>)
  }

  const handleMakeKeys = () => {
    const bottomKeys = 'ZXCVBNM'.split('')

    setKeys([
      makeRow('QWERTYUIOP'),
      makeRow('ASDFGHJKL'),
      makeRow(['erase', ...bottomKeys, 'send'])
    ])
  }

  useEffect(() => {
    handleMakeKeys()
  }, [])

  return (
    <View style={styles.container}>
      {keys}
    </View>
  )
}

export default Keyboard

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    marginBottom: '5@s',
    justifyContent: 'center'
  },
})