import styles from './App.module.css'
import { useEffect, useState } from 'react';
import { Header } from './components/Header'
import {Task} from './components/Task'
import { TaskBar } from './components/TaskBar'

import {v4 as uuidV4} from 'uuid'
import {Files} from '@phosphor-icons/react'


import './global.css'

const LOCAL_STORAGE_KEY = "todo:savedTasks"

export interface ITask{
  id: string;
  title: string;
  isComplete: boolean;
}

export function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);

  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved){
        setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks: ITask[]){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function addTask(taskTitle: string){
    setTasksAndSave([
        ...tasks,
        {
            id: uuidV4(),
            title: taskTitle,
            isComplete: false,
        }
    ])
  }

  function deleteTaskById(taskId: string){
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskIsCompletedById(taskId: string){
    const newTasks = tasks.map((task) => {
        if(task.id === taskId){
            console.log(!task.isComplete)
            return{
                ...task,
                isComplete: !task.isComplete,
            }
        }
        return task;
    });
    setTasksAndSave(newTasks);
    console.log(newTasks);
  }

  const taskQuantity = tasks.length

  const completedTasks = tasks.filter((task)=>task.isComplete).length
  return (
    <div>
      <Header />
      <TaskBar onAddTask={addTask}/>
    <main>
      <div className={styles.taskBoard}>
        <header>
            <p>
                To Do
                <span>
                    {taskQuantity}
                </span>
            </p>
             <p>
                Finished
                <span>
                    {completedTasks} of {taskQuantity}
                </span>
            </p>

        </header>
        <div className={styles.line}></div>
        {tasks.map(targetTask => {
            return <Task
            targetTask={targetTask}
            key={targetTask.id}
            onDelete={deleteTaskById}
            onToggle={toggleTaskIsCompletedById}
            />})
        }

        {tasks.length <= 0 &&(
            <section className={styles.empty}>
                <Files size={50}/>
                <div>
                    <p>
                        You have no tasks registered 
                    </p>
                    <span>
                        Create tasks and organize your to-do items
                    </span>
                </div>
            </section>
        )}
      </div>
    </main>
  </div>
  )
}

