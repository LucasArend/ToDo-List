import styles from './SetTaskBar.module.css';
import {v4 as uuidV4} from 'uuid';

const tasks = [
    {
      id: uuidV4,
      titulo: '',
      isComplete: false,
      publishedAt: new Date('2023-07-11 15:31:00')
    }
    
  ]

  function handleCreateNewTask(){
    event.preventDefault();
    console.log("oi")
  }

export function SetTaskBar() {
    return (
    <form onSubmit={handleCreateNewTask} className={styles.wrapper}>
            <textarea placeholder='Adicione uma nova tarefa'></textarea> 
            <button>Criar +</button> 
    </form>
    );
  }