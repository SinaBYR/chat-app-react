import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { Footer } from "./components/Footer/Footer"
import { Showcase } from "./components/Showcase/Showcase"
import { DispatchContext, StateContext } from "./store/context"
import { supabase } from "./supabase/supabase"
import { InitialState } from './store/context'
import LoadingOverlay from 'react-loading-overlay-ts'

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: 95% 5%;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.black};

  @media (max-width: 30em) {
    grid-template-rows: 1fr;
  }
`

export function App() {
  const { auth } = useContext(StateContext) as InitialState
  const dispatch = useContext(DispatchContext)
  const [loading, setLoading] = useState<boolean>(true)
  
  useEffect(() => {
    dispatch({ type: 'SIGN_IN', payload: supabase.auth.session() })
    
    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch({ type: 'SIGN_IN', payload: session })
    })
    setLoading(false)
  }, [])

  console.log(auth.session)

  async function signoutHandler() {
    try {
      await supabase.auth.signOut()
      dispatch({ type: 'SIGN_OUT' })
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <LoadingOverlay active={loading} spinner>
      <AppStyled>
        {auth.session ? <Dashboard /> : <Showcase />}
        <Footer />
        <button onClick={signoutHandler}>Logout</button>
      </AppStyled>
    </LoadingOverlay>
  )
}