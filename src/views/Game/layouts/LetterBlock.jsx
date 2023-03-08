import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import React from 'react'

const LetterBlock = ({ letter = '', }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{letter}</Text>
    </View>
  )
}

export default LetterBlock

const styles = ScaledSheet.create({
  container: {
    width: '40@s',
    height: '45@s',
    borderWidth: '2@s',
    borderColor: 'rgb(210, 210, 210)',
    borderRadius: '5@s',
    backgroundColor: 'rgb(227, 227, 227)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: '20@s'
  },
})