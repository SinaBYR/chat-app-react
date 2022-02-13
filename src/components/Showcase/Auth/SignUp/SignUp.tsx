import styled from 'styled-components'
import { Button, Input } from '../../../utilities'
import { useFormik } from 'formik'
import * as yup  from 'yup'

const Form = styled.form`
  display: block;
`

const Heading = styled.h2`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 1.5rem;
  text-align: center;
`

export function SignUp() {
  const initialValues = {
    email: '',
    password: '',
    confirm: ''
  }

  const SignupSchema = yup.object().shape({
    email: yup
      .string().email('Email address is not valid').required('Email is a required field'),
    password: yup
      .string().required('Password is a required field')
      .min(8, 'Password should be 8 chars minimum')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters'),
    confirm: yup
      .string().required('Password confirmation is a required field')
      .test('password-match', 'Passwords must match', function(value) {
        return this.parent.password === value
      })
  })

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      console.log(values)
    },
    validationSchema: SignupSchema
  })

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Register</Heading>
      <Input
        fullWidth
        type='email'
        label='Email'
        name='email'
        data-testid='email'
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
        data-testid='password'
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
        data-testid='confirm'
        value={values.confirm}
        error={touched.confirm && errors.confirm ? errors.confirm : null}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder=' '
      />
      <br />
      <Button type='submit' bgColor='orange' foreColor='black' fullWidth >Sign up</Button>
    </Form>
  )
}