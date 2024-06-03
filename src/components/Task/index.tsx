import styles from './task.module.css'
import {TbTrash} from 'react-icons/tb'


export function Task() {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div/>
            </button>
            
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit iure itaque ratione, aliquam natus sint consequuntur porro excepturi voluptatum delectus quia dignissimos cum similique ex, unde commodi labore exercitationem placeat.
            </p>

            <button className={styles.deleteButton}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}