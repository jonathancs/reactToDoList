import { ITask } from "./reducer"

export enum ActionTypes {
    ADD_NEW_TASK = 'ADD_NEW_TASK',
    DELETE_TASK = 'DELETE_TASK',
    TOGGLE_CHECK = 'TOGGLE_CHECK',
}

export function addNewCycleAction(newTask: ITask) {
  return {
    type: ActionTypes.ADD_NEW_TASK,
    payload: {
      newTask
    },
  }
}

export function deleteTaskByIdAction (newTasks: ITask) {
  return {
    type: ActionTypes.DELETE_TASK,
    payload: {
      newTasks
    },
  }
}

export function toggleCheckByIdAction (newTasks: ITask) {
  return {
    type: ActionTypes.TOGGLE_CHECK,
    payload: {
      newTasks
    },
  }
}