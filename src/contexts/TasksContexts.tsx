import { createContext, ReactNode, useReducer } from "react";
import { ITask, tasksReducer } from "../reducers/tasks/reducer";
import { addNewCycleAction, deleteTaskByIdAction, toggleCheckByIdAction } from "../reducers/tasks/actions";
import { produce } from "immer";

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

// parametros do reducer, funcao e valor  inicial.
// a funcao é dois parametros, state, valor atual em tempo real da variável, e a action.

export function TasksContextProvider ({children}: TasksContextProviderType) {
  const [tasks, dispatch] = useReducer(tasksReducer, [])

  function addTask(taskText: string) {

    let newTask = {
      id: crypto.randomUUID(),
      text: taskText,
      isComplete: false,
    }

    dispatch (addNewCycleAction(newTask))
  }

  function deleteTaskById(taskId: string) {
    let newTasks = tasks.filter((task: ITask) => task.id != taskId);

    dispatch (deleteTaskByIdAction(newTasks))
  }

  function toggleCheckById(taskId: string) {
    let newTasks = tasks.map((task: ITask) => {
      if (task.id == taskId) {
        // standard hook management
        // return {
          //   ...task,
          //   isComplete: !task.isComplete,
          // };
          
          // with immer hook manager
          return produce(task, (draft) => {
            draft.isComplete = !draft.isComplete
          })
      }
      return task;
    });
    
    dispatch (toggleCheckByIdAction(newTasks))
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