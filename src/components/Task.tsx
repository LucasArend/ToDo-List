import { ITask } from '../App'
import styles from './Task.module.css'
import { Trash, Check } from '@phosphor-icons/react'

interface Props{
    targetTask:ITask;
    onDelete:(taskID:string) => void;
    onToggle:(taskID:string) => void;
}

export function Task({targetTask, onDelete, onToggle}:Props) {
    const isCompleted = true

    return (
        
        <article className={styles.task}>
            <div>
                <button
                    className={styles.checkContainer}
                    onClick = {() => onToggle(targetTask.id)}
                >
                    {isCompleted ? <Check/> : <div/>}
                </button>
                <label content="Get out of bed">{targetTask.title}</label>   
            </div>
            <button className={styles.trashContainer} title="Delete task" onClick={() => onDelete(targetTask.id)}>
                <Trash size={20} />
            </button>
        </article>
    )
}
