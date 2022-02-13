import styled, { keyframes } from "styled-components"
import { useFormik } from "formik"
import { Button, Input } from "../../../utilities"
import * as yup from 'yup'

const animation = keyframes`
  from {
    transform: translateX(10px);
  }
  to {
    transform: translateX(0);
  }
`

const Form = styled.form`
  display: block;
  animation: ${animation} 350ms;
`

const Heading = styled.h2`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 1.5rem;
  text-align: center;
`

interface SignInProps {
  loading: boolean
}

export function SignIn({ loading } : SignInProps) {
  const initialValues = {
    email: '',
    password: ''
  }

  const SignInSchema = yup.object().shape({
    email: yup.string().required('Email is a required field'),
    password: yup.string().required('Password is a required field')
  })

  const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {

    },
    validationSchema: SignInSchema
  })

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Login with Email</Heading>
      <Input
        fullWidth
        type='email'
        label='Email'
        name='email'
        data-testid='signin-email'
        value={values.email}
        error={touched.email && errors.email ? errors.email : null}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder=' '
        />
      <br />
      <Input
        fullWidth
        type='password'
        label='Password'
        name='password'
        data-testid='signin-password'
        value={values.password}
        error={touched.password && errors.password ? errors.password : null}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder=' '
        />
        <br />
        <Button fullWidth bgColor="orange" foreColor="black">{loading ? 'Loading' : 'Sign in'}</Button>
    </Form>
  )
}