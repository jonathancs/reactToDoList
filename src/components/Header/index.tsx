import { useContext, useState } from "react";
import todoLogo from "../../assets/todoLogo.svg";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TasksContext } from "../../contexts/TasksContexts";

export function Header() {
  const [title, setTitle] = useState("");
  const {addTask} = useContext(TasksContext)

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    addTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="poe uma nova tarefa kkk"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
