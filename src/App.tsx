import styled from "styled-components"
import { useEffect, useState } from "react"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { Footer } from "./components/Footer/Footer"
import { Landing } from "./components/Landing/Landing"
import { useDispatch, useSelect } from "./store/hooks"
import { supabase } from "./supabase/supabase"
import LoadingOverlay from 'react-loading-overlay-ts'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 95% 5%;
  align-items: center;
  max-width: 1280px;
  height: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  margin: 0 auto;

  @media (max-width: 30em) {
    grid-template-rows: 1fr;
  }
`

export function App() {
  const { auth, app } = useSelect();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Checks to see if user has ever been visited our app before.
    // If it's not their first time, then an action gets dispatched to the store to set {app.firstTime} to false.
    const isFirstTime = localStorage.getItem('first-time')
    if(isFirstTime === 'false') {
      dispatch({ type: 'SET_FIRST_TIME_TO_FALSE' })
    }

    // signs in the user if there is still an active user session in the localstorage
    dispatch({ type: 'SIGN_IN', payload: supabase.auth.session() })

    // Starts listening to auth state changes.
    // If user signs in, session variable will contain user session object,
    // otherwise it'll be null. 
    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch({ type: 'SIGN_IN', payload: session })
    })
    setLoading(false)
  }, [])

  // console.log(auth.session)

  // async function signoutHandler() {
  //   try {
  //     await supabase.auth.signOut()
  //     dispatch({ type: 'SIGN_OUT' })
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  // function getProfile() {
  //     const user = supabase.auth.user()
  //     console.log(user)
  // }

  // async function updateUsername() {
  //   try {
  //     const { data, user } = await supabase.auth.update({data: { username: 'test2' }})
  //     console.log(data, user)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  return (
    <LoadingOverlay active={loading} spinner>
      <Wrapper>
        {auth.session ? <Dashboard /> : <Landing />}
        <Footer />
        {/* <button onClick={signoutHandler}>Logout</button>
        <button onClick={getProfile}>get profile</button>
        <button onClick={updateUsername}>Update username</button> */}
      </Wrapper>
    </LoadingOverlay>
  )
}