import styles from './SearchBar.module.css';

export function SearchBar() {
    return (
    <aside className={styles.wrapper}>
            <textarea placeholder='Adicione uma nova tarefa'></textarea> 
            <button>Criar +</button> 
    </aside>
    );
  }