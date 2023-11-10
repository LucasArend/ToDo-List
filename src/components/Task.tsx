import { ITask } from '../App'
import styles from './Task.module.css'
import { Trash, Check } from '@phosphor-icons/react'

interface Props{
    targetTask:ITask;
    onDelete:(taskID:string) => void;
    onToggle:(taskID:string) => void;
}

export function Task({targetTask, onDelete, onToggle}:Props) {

    return (
        <div className={styles.task}>
                <button
                    className={styles.checkContainer}
                    onClick = {() => onToggle(targetTask.id)}
                >
                    {targetTask.isComplete ?
                        <div className={targetTask.isComplete ? styles.divCompleted : ""}><Check/></div> :
                        <div/>
                    }
                </button>  

                <p className={targetTask.isComplete ? styles.textCompleted : ""}>
                    {targetTask.title}
                </p> 
            
            <button
                className={styles.trashContainer}
                title="Delete task"
                onClick={() => onDelete(targetTask.id)}
            >
                <Trash size={20} />
            </button>
        </div>
    )
}
