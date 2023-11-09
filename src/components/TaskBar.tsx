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
        setTitle(event.target.value)
    }


    return (

    <form className={styles.wrapper} onSubmit={handleSubmit}>
            <textarea
                placeholder='Adicione uma nova tarefa'
                onChange={onChangeTitle}
                value={title}
                >
            </textarea> 
            <button type='submit'>Criar +</button> 
    </form>
    );
  }