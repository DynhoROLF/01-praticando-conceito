import { Trash, Circle, CheckCircle } from 'phosphor-react'
import { useState } from 'react';
import { AppProps } from '../App';

import styles from './Task.module.css';

interface TaskProps {
  task: AppProps
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  return (
    <div>
      <main className={styles.main}>
        <button onClick={() => onComplete(task.id)}>
          { 
            task.isCompleted ? 
            <CheckCircle color='#5E60CE' weight="fill"/> :
            <Circle color='#4EA8DE'/> 
          }
        </button>
        <p className={task.isCompleted ? styles.textCompleted : ''}>
          {task.content}
        </p>
        
        <button onClick={() => onDelete(task.id)}>
          <Trash className={styles.image}/>
        </button>
      </main>
    </div>
  )
}