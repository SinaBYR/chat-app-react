import { Wrapper, Break, Footer } from './AuthStyled'
import { useState } from "react"
import { Button } from "../../utilities"
import { SignIn } from "./SignIn/SignIn"
import { SignUp, SignupFormData } from "./SignUp/SignUp"
import { SigninFormData } from './SignIn/SignIn'

export function Auth() {
  const [page, setPage] = useState<'signup' | 'signin'>('signup')
  const [loading, setLoading] = useState<boolean>(false)

  function pageChangeHandler() {
    if(page === 'signup') {
      return setPage('signin')
    }

    setPage('signup')
  }

  function SignupHandler(values: SignupFormData) {
    setLoading(true)
    console.log('signed up: ', values)
  }

  function SigninHandler(values: SigninFormData) {
    setLoading(true)
    console.log('signed in: ', values)
  }

  return (
    <Wrapper>
      <Button bgColor="orange" foreColor="black" fullWidth>Sign in as a guest</Button>
      <Break />
      {page === 'signup' ? <SignUp submit={SignupHandler} loading={loading}/> : <SignIn submit={SigninHandler} loading={loading}/>}
      <Footer>
        {page === 'signup' ? 'Already got an account?' : "Don't have an account?"} <button onClick={pageChangeHandler}>{page === 'signup' ? 'Sign in' : 'Sign up'}</button>
      </Footer>
    </Wrapper>
  )
}
