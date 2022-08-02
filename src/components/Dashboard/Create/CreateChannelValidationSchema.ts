import * as yup from 'yup'

export const CreteChannelValidationSchema = yup.object().shape({
  channelName: yup.string().required('This is a required field'),
  channelPassword: yup
    .string()
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters'),
  channelPasswordConfirm: yup
    .string()
    .test('password-match', 'Passwords must match', function(value) {
      return this.parent.channelPassword === value
    })
})