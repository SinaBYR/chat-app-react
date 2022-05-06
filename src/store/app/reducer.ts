import { AppActionTypes } from './actions';
import { AppState } from './types'

export const appInitialState: AppState = {
  firstTime: true
}

export function appReducer(state: AppState = appInitialState, action: AppActionTypes): AppState {
  switch(action.type) {
    case 'SET_FIRST_TIME_TO_FALSE': {
      return {
        firstTime: false
      }
    }
    default: {
      return state
    }
  }
}