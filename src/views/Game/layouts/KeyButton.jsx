import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import React from 'react'

const KeyButton = ({ letter = 'A', onPress = null }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{letter}</Text>
    </View>
  )
}

export default KeyButton

const styles = ScaledSheet.create({
  container: {
    width: '25@s',
    height: '35@s',
    alignItems: 'center',
    borderRadius: '3@s',
    justifyContent: 'center',
    backgroundColor: 'rgb(227, 227, 227)',
    marginHorizontal: '2@s',
  },
  text: {
    fontSize: '14@s'
  }
})