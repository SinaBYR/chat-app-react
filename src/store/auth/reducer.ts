import { AuthInitialState } from './types'
import { AuthActionTypes } from './actions'

export const authInitialState: AuthInitialState = {
  session: null
}

export function authReducer(state: AuthInitialState = authInitialState, action: AuthActionTypes): AuthInitialState  {
  switch (action.type) {
    case 'SIGN_IN': {
      return {
        ...state,
        session: action.payload
      }
    }
  
    case 'SIGN_OUT': {
      return {
        ...state,
        session: null
      }
    }
  
    default:
      break;
  }

  return state
}