import { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'

import './global.css'

const LOCAL_STORAGE_KEY = 'savedTasks'
export interface AppProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<AppProps[]>([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setSaveTasks(newTasks: AppProps[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function handleCreateNewTask(contentTask: string) {
    setSaveTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        content: contentTask,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setSaveTasks(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) {
        return {
          ...task,
          isCompleted:!task.isCompleted,
        }
      }
      return task;
    });
    setSaveTasks(newTasks);
  }

  return (
    <>
      <Header />
      <Dashboard 
        tasks={tasks} 
        onHandleCreateNewTask={handleCreateNewTask}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  )
}

export default App
