import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useContext } from "react";
import { ITask, TasksContext } from "../../contexts/TasksContexts";

interface Props {
  task: ITask;
}

export function Task({task}: Props) {
  const {deleteTaskById, toggleCheckById} = useContext(TasksContext)
  
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => toggleCheckById(task.id)}
      >
        {task.isComplete ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isComplete ? styles.textCompleted : ""}>
        {" "}
        {task.text}{" "}
      </p>

      <button className={styles.deleteButton} onClick={() => deleteTaskById(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
