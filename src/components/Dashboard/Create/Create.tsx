import styled from "styled-components";
import { useFormik } from "formik";
import { Button, HTwo, Input, Text } from "../../utilities";
import { CreteChannelValidationSchema } from "./CreateChannelValidationSchema";

const Wrapper = styled.div`
  position: absolute;
  left: 332px;
  bottom: 16px;
  width: calc(100% - 348px);
  height: calc(100% - 118px);
  color: ${({ theme }) => theme.colors.white};
  background-color: #15171a;
  padding: 1rem;
`;

const Form = styled.form`
  margin-top: 2rem;
`;

export function Create() {
  const initialValues = {
    channelName: '',
    channelPassword: '',
    channelPasswordConfirm: ''
  }

  const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {

    },
    validationSchema: CreteChannelValidationSchema
  })

  return (
    <Wrapper>
      <HTwo>New channel</HTwo>
      <Text style={{ fontSize: '1.2rem'}}>Create a brand new channel, customize it, and invite people to join.</Text>
      <Text style={{ fontSize: '1rem', fontStyle: 'italic', marginTop: '1rem' }}>Note that channel password is optional. Leave it blank if you'd like it to be open to public.</Text>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="channelName"
          label="Channel Name"
          data-testid="create-channel-name"
          error={touched.channelName && errors.channelName ? errors.channelName : null}
          value={values.channelName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "/>
        <br />
        <Input
          type="password"
          name="channelPassword"
          label="Channel Password"
          data-testid="create-channel-password"
          error={touched.channelPassword && errors.channelPassword ? errors.channelPassword : null}
          value={values.channelPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "/>
        <br />
        <Input
          type="password"
          name="channelPasswordConfirm"
          label="Confirm Channel Password"
          data-testid="create-channel-password-confirm"
          error={touched.channelPasswordConfirm && errors.channelPasswordConfirm ? errors.channelPasswordConfirm : null}
          value={values.channelPasswordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "/>
        <br />
        <Button type="submit" bgColor="orange" foreColor="black">{false ? 'Loading' : 'Create channel'}</Button>
      </Form>
    </Wrapper>
  )
}