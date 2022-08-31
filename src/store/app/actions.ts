import { Channel } from "./types";

export type AppActionTypes = 
  | { type: 'SET_FIRST_TIME_TO_FALSE' }
  | { type: 'STORE_CHANNELS', payload: Channel[] }