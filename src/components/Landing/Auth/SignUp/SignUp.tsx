import { Form, Heading } from './SignUpStyled'
import { Button, Input } from '../../../utilities'
import { useFormik } from 'formik'
import { SignupValidationSchema } from './SignupValidationSchema'

export interface SignupFormData {
  email: string
  password: string
  confirm: string
}

interface SignUpProps {
  loading: boolean
  submit?: (values: SignupFormData) => void
}

export function SignUp({ loading, submit } : SignUpProps) {
  const initialValues: SignupFormData = {
    email: '',
    password: '',
    confirm: ''
  }

  const { handleSubmit, handleChange, handleBlur, values, errors, touched, isValid } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      if(submit) {
        submit(values)
      }
    },
    validationSchema: SignupValidationSchema
  })

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Register</Heading>
      <Input
        fullWidth
        type='email'
        label='Email'
        name='email'
        data-testid='signup-email'
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
        data-testid='signup-password'
        value={values.password}
        error={touched.password && errors.password ? errors.password : null}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder=' '
        />
      <br />
      <Input
        fullWidth
        type='password'
        label='Confirm password'
        name='confirm'
        data-testid='signup-confirm'
        value={values.confirm}
        error={touched.confirm && errors.confirm ? errors.confirm : null}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder=' '
      />
      <br />
      <Button
        type='submit'
        bgColor='orange'
        foreColor='black'
        fullWidth
        disabled={!isValid}>{loading ? 'Loading' : 'Sign up'}</Button>
    </Form>
  )
}