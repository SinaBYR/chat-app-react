import { InitialState } from './types'
import { ActionTypes } from './actions'

const initialState: InitialState = {
  session: null
}

export function authReducer(state: InitialState = initialState, action: ActionTypes): InitialState  {
  if(action.type === 'SIGN_IN') {
    return {
      ...state,
      session: action.payload
    }
  }

  return state
}