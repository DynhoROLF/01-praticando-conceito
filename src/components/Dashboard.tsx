import { Clipboard, PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AppProps } from '../App';

import styles from './Dashboard.module.css';
import { Task } from './Task';

interface DashboardProps {
  tasks: AppProps[];
  onHandleCreateNewTask: (contentTask: string) => void;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Dashboard({ tasks, onHandleCreateNewTask, onDelete, onComplete }: DashboardProps) {
  const [newTaskContent, setNewTaskContent] = useState('');
  const tasksNumber = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onHandleCreateNewTask(newTaskContent);
    setNewTaskContent('');
  }

  function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value);
  }

  return (
    <div className={styles.app}>
      <form onSubmit={handleCreateNewTask} className={styles.main}>
        <textarea
          name='content'
          placeholder='Adicione uma tarefa'
          onChange={onChangeContent}
          value={newTaskContent}
          required
        />
        <button>
          Criar
          <PlusCircle size={16}/>
        </button>
      </form>

      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <strong>Tarefas Criadas</strong>
          <span>{tasksNumber}</span>
        </div>
        <div className={styles.footerRight}>
          <strong>Concluídas</strong>
          <span>{completedTasks} de {tasksNumber}</span>
        </div>
      </footer>

      <div>
        {tasks.map((task) => {
          return (
            <Task 
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          )
        })}

        {tasks.length <= 0 && (
          <section className={styles.noTasks}>
            <Clipboard size={50} />
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}