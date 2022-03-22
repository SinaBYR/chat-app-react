import { Session } from "@supabase/supabase-js";

export type ActionTypes = 
  | { type: 'SIGN_IN', payload: Session }