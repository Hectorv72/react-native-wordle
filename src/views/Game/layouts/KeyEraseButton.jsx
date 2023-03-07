import { View } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const KeyEraseButton = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="eraser" size={scale(14)} color="black" />
    </View>
  )
}

export default KeyEraseButton

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