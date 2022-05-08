import React, { createContext, useReducer } from "react";
import { AppActionTypes } from "./app/actions";
import { appInitialState, appReducer } from "./app/reducer";
import { AppState } from "./app/types";
import { AuthActionTypes } from "./auth/actions";
import { authInitialState, authReducer } from "./auth/reducer";
import { AuthInitialState } from "./auth/types";

export interface State {
  auth: AuthInitialState
  app: AppState
}

type ActionType = AuthActionTypes | AppActionTypes

const initialState: State = {
  auth: authInitialState,
  app: appInitialState
}

const mainReducer = ({ auth, app }: State, action: any) => ({
  auth: authReducer(auth, action as AuthActionTypes), // auth slice
  app: appReducer(app, action as AppActionTypes) // app slice
})

export const DispatchContext = createContext<React.Dispatch<ActionType>>(() => null)
export const StateContext = createContext<State | null>(null)

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