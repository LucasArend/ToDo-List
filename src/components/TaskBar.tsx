import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './TaskBar.module.css';

interface Props{
    onAddTask: (taskTitle: string) => void
}

export function TaskBar({onAddTask}:Props) {

    const [title, setTitle] = useState("")

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setTitle(event.target.value)
    }

    function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('Required field!')
    }


    return (

    <form className={styles.wrapper} onSubmit={handleSubmit}>
            <textarea
                placeholder='Adicione uma nova tarefa'
                onChange={onChangeTitle}
                value={title}
                onInvalid={handleNewTaskInvalid}
                required
                >
            </textarea> 
            <button type='submit' disabled={title.length === 0}>Criar +</button> 
    </form>
    );
  }