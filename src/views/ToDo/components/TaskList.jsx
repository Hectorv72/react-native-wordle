import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import Task from './Task'

const TaskList = () => {
  const { tasks } = useContext(TaskContext)

  const renderItem = ({ item, index }) => <Task data={item} index={index} />

  return (
    <FlatList data={tasks} renderItem={renderItem} />
  )
}

export default TaskList

const styles = StyleSheet.create({})