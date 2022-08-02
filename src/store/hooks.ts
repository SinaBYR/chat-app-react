import { useContext } from "react";
import { DispatchContext, State, StateContext } from "./context";

export function useSelect() {
  const state = useContext(StateContext) as State;

  return state;
}

export function useDispatch() {
  const dispatch = useContext(DispatchContext);

  return dispatch;
}