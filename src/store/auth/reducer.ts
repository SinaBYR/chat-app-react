import { AuthInitialState } from './types'
import { AuthActionTypes } from './actions'

export const authInitialState: AuthInitialState = {
  session: null
}

export function authReducer(state: AuthInitialState = authInitialState, action: AuthActionTypes): AuthInitialState  {
  if(action.type === 'SIGN_IN') {
    return {
      ...state,
      session: action.payload
    }
  }

  return state
}