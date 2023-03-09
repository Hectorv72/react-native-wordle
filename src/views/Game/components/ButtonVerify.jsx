import React from 'react'
import useGame from '../hooks/useGame'
import { Button } from '@react-native-material/core'
import { Dimensions, View } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'

const ButtonVerify = () => {
  const { verifyWord } = useGame()

  return (
    <View style={styles.container}>
      <Button onPress={verifyWord} title={'verificar'} />
    </View>
  )
}

export default ButtonVerify

const styles = ScaledSheet.create({
  container: {
    marginVertical: '10@s',
    alignSelf: 'center',
    width: Dimensions.get('window').width - scale(160)
  },
})