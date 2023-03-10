import { View } from 'react-native'
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

  useEffect(() => {
    setTimeout(() => setAnimate(true), 2000)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <LetterBlock letter={'W'} typeColor={animate && selectRandomElement(listTypes)} delay={1 * 200} />
        <LetterBlock letter={'O'} typeColor={animate && selectRandomElement(listTypes)} delay={2 * 200} />
        <LetterBlock letter={'R'} typeColor={animate && selectRandomElement(listTypes)} delay={3 * 200} />
        <LetterBlock letter={'D'} typeColor={animate && selectRandomElement(listTypes)} delay={4 * 200} />
        <LetterBlock letter={'L'} typeColor={animate && selectRandomElement(listTypes)} delay={5 * 200} />
        <LetterBlock letter={'E'} typeColor={animate && selectRandomElement(listTypes)} delay={6 * 200} />
      </View>
      <View style={styles.row}>
        <LetterBlock letter={'G'} typeColor={animate && selectRandomElement(listTypes)} delay={7 * 200} />
        <LetterBlock letter={'A'} typeColor={animate && selectRandomElement(listTypes)} delay={8 * 200} />
        <LetterBlock letter={'M'} typeColor={animate && selectRandomElement(listTypes)} delay={9 * 200} />
        <LetterBlock letter={'E'} typeColor={animate && selectRandomElement(listTypes)} delay={10 * 200} />
      </View>
    </View>
  )
}

export default Logo

const styles = ScaledSheet.create({
  container: {
    alignContent: 'center'
  },
  row: {
    width: '230@s',
    flexDirection: 'row',
    justifyContent: 'center',
    // justifyContent: 'space-between',
    gap: '8@s',
    alignSelf: 'center',
    marginBottom: '8@s'
  }
})