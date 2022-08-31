import { AppActionTypes } from './actions';
import { AppState } from './types'

export const appInitialState: AppState = {
  firstTime: true,
  channels: []
}

export function appReducer(state: AppState = appInitialState, action: AppActionTypes): AppState {
  switch(action.type) {
    case 'SET_FIRST_TIME_TO_FALSE': {
      return {
        ...state,
        firstTime: false
      }
    };

    case 'STORE_CHANNELS': {
      return {
        ...state,
        channels: action.payload
      }
    };

    default: {
      return state
    }
  }
}