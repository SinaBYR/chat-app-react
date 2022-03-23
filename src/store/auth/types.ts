import { Session } from '@supabase/supabase-js'

export interface AuthInitialState {
  session: null | Session
}