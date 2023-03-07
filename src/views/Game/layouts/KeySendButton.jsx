import { TouchableHighlight } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const KeySendButton = () => {
  return (
    <TouchableHighlight style={styles.container} underlayColor={'rgba(0,0,0,0.2)'} onPress={() => console.log('send')}>
      <Ionicons name="send" size={scale(14)} color="black" />
    </TouchableHighlight>
  )
}

export default KeySendButton

const styles = ScaledSheet.create({
  container: {
    width: '40@s',
    height: '35@s',
    alignItems: 'center',
    borderRadius: '3@s',
    justifyContent: 'center',
    backgroundColor: 'rgb(227, 227, 227)',
    marginHorizontal: '2@s',
  }
})