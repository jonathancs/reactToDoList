import todoLogo from '../../assets/todoLogo.svg'
import styles from './header.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'

export function Header () {
    return (
        <header className={styles.header}>
            <img src={todoLogo} />

            <form className={styles.newTaskForm}>
                <input placeholder='poe uma nova tarefa kkk' />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}