import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TaskProvider } from './contexts/TaskContext'
import TaskList from './components/TaskList'
import InputTask from './components/InputTask'
import ClearTasksButton from './components/ClearTasksButton'

const ToDo = () => {

  return (
    <View style={styles.container}>
      <TaskProvider>
        <InputTask />
        <TaskList />
        <ClearTasksButton />
      </TaskProvider>
    </View>
  )
}

export default ToDo

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})