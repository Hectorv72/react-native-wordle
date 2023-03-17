import React, { useEffect, useState } from 'react'
import useGame from '../hooks/useGame'
import { Button } from '@react-native-material/core'
import { Dimensions, View } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import WordsList from '../utilities/WordsList'

const ButtonVerify = () => {
  const { verifyWord, game } = useGame()
  const { limitWords, blocks, attemp } = game
  const [disabled, setDisabled] = useState(false)

  const textCount = blocks[attemp - 1].text.length

  useEffect(() => {
    setDisabled(textCount !== limitWords || !WordsList.includes(blocks[attemp - 1].text))
  }, [textCount])

  return (
    <View style={styles.container}>
      <Button disabled={disabled || game.verify} onPress={verifyWord} title={'verificar'} />
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