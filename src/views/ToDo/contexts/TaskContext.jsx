import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([{ text: 'Test Item', checked: false }]);

  const handlers = {};

  handlers.addTask = (task) => {
    setTasks([...tasks, task]);
  }

  handlers.clearCompleted = () => {
    const filterTasks = tasks.filter(task => !task.checked);
    setTasks(filterTasks);
  }

  handlers.checkTask = (idTask) => {
    const update = [...tasks];
    update[idTask].checked = !update[idTask].checked;
    setTasks(update);
  }

  return (
    <TaskContext.Provider value={{ tasks, handlers }}>
      {children}
    </TaskContext.Provider>
  )
}