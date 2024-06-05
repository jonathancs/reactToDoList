import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export interface ITask {
  id: string;
  text: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(taskText: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        text: taskText,
        isComplete: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function toggleCheckById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleCheckById}
      />
    </>
  );
}

export default App;
