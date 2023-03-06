import { View } from 'react-native'
import { Button, TextInput } from '@react-native-material/core'
import React, { useContext, useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import { TaskContext } from '../contexts/TaskContext';

const InputTask = () => {
  const { handlers } = useContext(TaskContext);
  const [entry, setEntry] = useState('');

  const handleSetEntry = (text) => {
    setEntry(text);
  }

  const handleCreateTask = () => {
    if (entry.trim() !== '') {
      const task = { text: entry, checked: false };
      handlers.addTask(task);
      setEntry('');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput onChangeText={handleSetEntry} value={entry} placeholder='Write a task...' />
      <Button title='ADD TASK' disabled={entry.trim() === ''} onTouchEnd={handleCreateTask} />
    </View>
  )
}

export default InputTask

const styles = ScaledSheet.create({
  container: {
    marginBottom: '10@s'
  }
})