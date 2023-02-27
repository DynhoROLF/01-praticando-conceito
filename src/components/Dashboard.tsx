import styles from './Dashboard.module.css';
import { Trash } from 'phosphor-react'

export function Dashboard() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <strong>Tarefas Criadas</strong>
          <span>5</span>
        </div>
        <div className={styles.headerRight}>
          <strong>Concluídas</strong>
          <span>2 de 5</span>
        </div>
      </header>

      <main>
        <input type="checkbox" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptates perferendis, ipsum explicabo nesciunt deserunt laudantium voluptatibus quisquam modi ea aperiam quam eligendi sed quia distinctio ipsa cum, voluptatum incidunt!</p>
        <Trash />
      </main>

    </div>
  )
}