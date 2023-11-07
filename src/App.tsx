import { Header } from './components/Header'
import {Task} from './components/Task'
import { SearchBar } from './components/SearchBar'
import {uuid} from 'uuid'

import styles from './App.module.css'

import './global.css'

//task[isComplete=boolean, titulo=string, id=uuidv4]
// publishedAt: Date

const tasks = [
  {
    id: uuid,
    titulo: string,
    isComplete: boolean,
  },
  
]

export function App() {
  return (
    <div>
      <Header />
      <SearchBar />
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

