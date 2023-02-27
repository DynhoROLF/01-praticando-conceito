import { Task } from './components/Task'
import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { Dashboard } from './components/Dashboard'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Task />
        <main>
          <Dashboard />

        </main>
      </div>
    </div>
  )
}

export default App
