import { TbClipboardText } from "react-icons/tb";
import { Task } from "../Task";
import styles from "./tasks.module.css";
import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContexts";

export function Tasks() {
  const {tasks} = useContext(TasksContext)
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isComplete).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Tarefas concluidas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task task={task} />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>voce ainda nao tem tarefas cadastradas</p>
              <span>crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
