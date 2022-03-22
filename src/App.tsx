import { GoTrueClient, Session } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { Footer } from "./components/Footer/Footer"
import { Showcase } from "./components/Showcase/Showcase"
import { supabase } from "./supabase/supabase"
import { ThemeProvider } from "./theme/ThemeProvider"

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
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  console.log(session)

  return (
    <AppStyled>
      {session ? <Dashboard /> : <Showcase />}
      <Footer />
    </AppStyled>
  )
}