import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react'


export function Task(props) {
    return (
        <article className={styles.task}>
            <div>
                <input type="checkbox" id="todo" name="todo" value="todo"/>
                <label content="Get out of bed">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
            </div>
            <button title="Delete task">
                <Trash size={20}/>
            </button>
        </article>
    )
}
