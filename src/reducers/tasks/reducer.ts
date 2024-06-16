import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface ITask {
    id: string;
    text: string;
    isComplete: boolean;
}

export function tasksReducer (state: ITask[], action: any) {

    switch (action.type) {
      case ActionTypes.ADD_NEW_TASK:
        // with standard hook management
        // return [...state, action.payload.newTask]

        // with immer
        return produce(state, (draft) => {draft.push(action.payload.newTask)})
      case ActionTypes.DELETE_TASK:
        return action.payload.newTasks
      case ActionTypes.TOGGLE_CHECK:
        return action.payload.newTasks
      default:
        return state
    }
  }