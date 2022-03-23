import React, { createContext, useReducer } from "react";
import { AuthActionTypes } from "./auth/actions";
import { authInitialState, authReducer } from "./auth/reducer";
import { AuthInitialState } from "./auth/types";

interface InitialState {
  auth: AuthInitialState
}

interface ActionTypes {
  auth: AuthActionTypes
}

const initialState: InitialState = {
  auth: authInitialState
}

const mainReducer = ({ auth }: InitialState, action: ActionTypes) => ({
  auth: authReducer(auth, action.auth)
  // shoppingCart: shoppingCartReducer(shoppingCart, action),
});

const DispatchContext = createContext<React.Dispatch<ActionTypes>>(() => null)
const StateContext = createContext<InitialState | null>(null)

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}