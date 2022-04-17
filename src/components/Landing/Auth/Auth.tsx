import { Wrapper, Break, Footer } from './AuthStyled'
import { useState } from 'react'
import { Button } from '../../utilities'
import { SignIn } from './SignIn/SignIn'
import { SignUp, SignupFormData } from './SignUp/SignUp'
import { SigninFormData } from './SignIn/SignIn'
import { supabase } from '../../../supabase/supabase'

export function Auth() {
  const [page, setPage] = useState<'signup' | 'signin'>('signup')
  const [loading, setLoading] = useState<boolean>(false)

  function pageChangeHandler() {
    if(page === 'signup') {
      return setPage('signin')
    }

    setPage('signup')
  }

  async function SignupHandler(values: SignupFormData) {
    try {
      setLoading(true)
      const username = values.email.substring(0, values.email.indexOf('@'))
      const res = await supabase.auth.signUp({ email: values.email, password: values.password }, { data: { username } })
      console.log(res)
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  async function SigninHandler({ email, password }: SigninFormData) {
    try {
      setLoading(true)
      await supabase.auth.signIn({ email, password })
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
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
