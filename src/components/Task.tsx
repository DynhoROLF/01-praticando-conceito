import { PlusCircle } from 'phosphor-react';
import { FormEvent } from 'react';
import styles from './Task.module.css';

export function Task() {
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    console.log('TODO');
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.main}>
        <textarea 
          placeholder='Adicione uma tarefa'
          required
        />
        <button>
          Criar
          <PlusCircle size={16}/>
        </button>
        
      </form>
    </div>
  )
}