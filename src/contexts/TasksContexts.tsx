import { createContext, ReactNode, useReducer } from "react";
import { ActionTypes, tasksReducer } from "../reducers/tasksReducer";



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

    dispatch ({
      type: ActionTypes.ADD_NEW_TASK,
      payload: {
        newTask
      },
    })
  }

  function deleteTaskById(taskId: string) {
    let newTasks = tasks.filter((task) => task.id != taskId);

    dispatch ({
      type: ActionTypes.DELETE_TASK,
      payload: {
        newTasks
      },
    })
  }

  function toggleCheckById(taskId: string) {
    let newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });
    
    dispatch ({
      type: ActionTypes.TOGGLE_CHECK,
      payload: {
        newTasks
      },
    })
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