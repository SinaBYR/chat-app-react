import { Session } from '@supabase/supabase-js'

export interface InitialState {
  session: null | Session
}