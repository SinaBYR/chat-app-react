import React, { createContext, useReducer } from "react";
import { AuthActionTypes } from "./auth/actions";
import { authInitialState, authReducer } from "./auth/reducer";
import { AuthInitialState } from "./auth/types";

export interface InitialState {
  auth: AuthInitialState
}

type ActionTypes = AuthActionTypes

const initialState: InitialState = {
  auth: authInitialState
}

const mainReducer = ({ auth }: InitialState, action: ActionTypes) => ({
  auth: authReducer(auth, action as AuthActionTypes)
})

export const DispatchContext = createContext<React.Dispatch<ActionTypes>>(() => null)
export const StateContext = createContext<InitialState | null>(null)

export const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}