import { useState } from 'react';
import { Header } from './components/Header'
import {Task} from './components/Task'
import { TaskBar } from './components/TaskBar'
import {v4 as uuidV4} from 'uuid'

import styles from './App.module.css'

import './global.css'
  
export interface ITask{
  id: string;
  title: string;
  isComplete: boolean;
}

export function App() {

  const [tasks, setTasks] = useState<ITask[]>([
  ]);

  function addTask(taskTitle: string){
    setTasks([
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
    setTasks(newTasks);
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
    setTasks(newTasks);
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
        {tasks.map(targetTask => {
            return <Task
            targetTask={targetTask}
            key={targetTask.id}
            onDelete={deleteTaskById}
            onToggle={toggleTaskIsCompletedById}
            />})}
      </div>
    </main>
  </div>
  )
}

