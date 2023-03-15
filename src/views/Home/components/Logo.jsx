import { FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import LetterBlockTypes from '../../../models/enum/LetterBlockTypes'
import LetterBlock from '../../../layouts/LetterBlock'
import selectRandomElement from '../../../helpers/selectRandomElement'

const Logo = () => {

  const [animate, setAnimate] = useState(false)
  const listTypes = [
    LetterBlockTypes.CORRECT,
    LetterBlockTypes.GOOD,
    LetterBlockTypes.INCORRECT,
  ]

  const renderItem = ({ item, index }) =>
    <View style={styles.block}>
      <LetterBlock letter={item} typeColor={animate && selectRandomElement(listTypes)} delay={(index + 1) * 200} />
    </View>

  useEffect(() => {
    setTimeout(() => setAnimate(true), 3000)
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={6}
        data={'WORDLEGAME'.split('')}
        renderItem={renderItem}
        contentContainerStyle={styles.row}
      />
    </View>
  )
}

export default Logo

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    marginHorizontal: '5@s',
    marginBottom: '5@s',
  },
  row: {
    alignItems: 'center'
  }
})