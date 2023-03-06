import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ListItem, Switch } from '@react-native-material/core'
import { TaskContext } from '../contexts/TaskContext'

const Task = ({ data, index }) => {
  const { handlers } = useContext(TaskContext);

  const handleChangeSwitch = () => {
    handlers.checkTask(index);
  }

  const checkButton = <Switch value={data?.checked} onChange={handleChangeSwitch} />

  return (
    <View>
      <ListItem title={data.text} trailing={checkButton} />
    </View>
  )
}

export default Task

const styles = StyleSheet.create({})