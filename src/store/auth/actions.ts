import { Session } from "@supabase/supabase-js";

export type AuthActionTypes = 
  | { type: 'SIGN_IN', payload: Session | null }
  | { type: 'SIGN_OUT' }