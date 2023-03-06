import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import { Button } from '@react-native-material/core';

const ClearTasksButton = () => {
  const { tasks, handlers } = useContext(TaskContext);

  const hasCompleted = tasks.filter(task => task.checked).length > 0

  const handleOnTouch = () => {
    handlers.clearCompleted();
  }

  return (
    <Button title="CLEAR COMPLETED" color='green' onTouchEnd={handleOnTouch} disabled={!hasCompleted} />
  )
}

export default ClearTasksButton