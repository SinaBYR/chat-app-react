import * as yup from 'yup'

export const SignupSchema = yup.object().shape({
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