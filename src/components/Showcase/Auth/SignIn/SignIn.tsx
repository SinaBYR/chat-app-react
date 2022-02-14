import { Form, Heading } from './SignInStyled'
import { Button, Input } from '../../../utilities'
import { useFormik } from 'formik'
import { SigninValidationSchema } from './SigninValidationSchema'

export interface SigninFormData {
  email: string
  password: string
}

interface SignInProps {
  loading: boolean
  submit?: (values: SigninFormData) => void
}

export function SignIn({ submit, loading } : SignInProps) {
  const initialValues: SigninFormData = {
    email: '',
    password: ''
  }

  const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      if(submit) {
        submit(values)
      }
    },
    validationSchema: SigninValidationSchema
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
        <Button type="submit" bgColor="orange" foreColor="black" fullWidth>{loading ? 'Loading' : 'Sign in'}</Button>
    </Form>
  )
}