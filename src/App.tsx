import { Header } from './components/Header'
import {Task} from './components/Task'
import { SetTaskBar } from './components/SetTaskBar'


import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <SetTaskBar />
    <main>
      <div className={styles.taskBoard}>
        <header>
          <p>To Do</p>
          <p>Finished</p>
        </header>
        <Task
          content="tarefa 1"
        />
        <Task
          content="Tarefa 2"
        />
        <Task
          content="Tarefa 3"
        />
        <Task
          content="Tarefa 4"
        />
        <Task
          content="Tarefa 5"
        />
        <Task
          content="Tarefa 6"
        />
      </div>
    </main>
  </div>
  )
}

