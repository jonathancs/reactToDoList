import { Children, createContext, ReactNode, useReducer, useState } from "react";

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

// parametros do reducer, funcao e valor  inicial.
// a funcao é dois parametros, state, valor atual em tempo real da variável, e a action.

export function TasksContextProvider ({children}: TasksContextProviderType) {
  const [tasks, dispatch] = useReducer((state: ITask[], action: any) => {
    console.log(state)
    console.log(action)

    if (action.type == 'ADD_NEW_TASK') {
      return [...state, action.payload.newTask]
    }

    if (action.type == 'DELETE_TASK') {
      return [action.payload.newTasks]
    }

    if (action.type == 'TOGGLE_CHECK') {
      return [action.payload.newTasks]
    }

    return state
  }, [])

  function addTask(taskText: string) {

    let newTask = {
      id: crypto.randomUUID(),
      text: taskText,
      isComplete: false,
    }

    dispatch ({
      type: 'ADD_NEW_TASK',
      payload: {
        newTask
      },
    })
  }

  function deleteTaskById(taskId: string) {
    let newTasks = tasks.filter((task) => task.id != taskId);

    dispatch ({
      type: 'DELETE_TASK',
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
      type: 'TOGGLE_CHECK',
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