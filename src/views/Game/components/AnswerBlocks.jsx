import React from 'react'
import WordRow from './WordRow'
import { FlatList, View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import useGame from '../hooks/useGame'

const AnswerBlocks = () => {
  const { game } = useGame()
  const { blocks } = game

  const renderItem = ({ item }) =>
    <View style={styles.rows}>
      <WordRow key={`wordrow-${item.attemp}`} attemp={item.attemp} />
    </View>

  return (
    <>
      <FlatList
        data={blocks}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <Text>{game.solution}</Text>
    </>
  )
}

export default AnswerBlocks

const styles = ScaledSheet.create({
  rows: {
    marginVertical: '5@s'
  },
  list: {
    height: '100%',
    justifyContent: 'center',
  }
})