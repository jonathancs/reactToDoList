import { Children, createContext, ReactNode, useState } from "react";

export interface ITask {
    id: string;
    text: string;
    isComplete: boolean;
}

interface TasksContextType {
    tasks: ITask[]
    addTask: (taskText: string) => void
    deleteTaskById: (taskId: string) => void
    toggleCheckById: (taskId: string) => void
}

export const TasksContext = createContext({} as TasksContextType)

interface TasksContextProviderType {
    children: ReactNode
}

export function TasksContextProvider ({children}: TasksContextProviderType) {
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
    <TasksContext.Provider value={{
        tasks,
        addTask,
        deleteTaskById,
        toggleCheckById,
    }}>
        {children}
    </TasksContext.Provider>
  )

}