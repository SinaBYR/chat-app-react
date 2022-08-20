import styled from "styled-components";
import { useFormik } from "formik";
import { Button, HTwo, Input, Spinner, Text, Callout } from "../../utilities";
import { validationSchema, initialValues } from "./create-channel-formik";
import { supabase } from "../../../supabase/supabase";
import { useSelect } from "../../../store/hooks";
import { useEffect, useState } from "react";
import { SuccessIndicator } from "./SuccessIndicator/SuccessIndicator";

const Wrapper = styled.div`
  position: absolute;
  left: 332px;
  bottom: 16px;
  width: calc(100% - 348px);
  height: calc(100% - 118px);
  color: ${({ theme }) => theme.colors.white};
  background-color: #15171a;
  padding: 1rem;

  @media only screen and (max-width: 600px) {
    position: static;
    width: 100%;
    height: 100%;
  }
`;

const Form = styled.form`
  margin-top: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

export function Create() {
  const { auth } = useSelect();
  const [loading, setLoading] = useState<boolean>(false);
  const [statusCode, setStatusCode] = useState<number|null>(null);

  let statusCodeTimeout: NodeJS.Timeout | null = null;
  const { handleChange, handleBlur, handleSubmit, values, touched, errors, isValid } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, actions) => {
      setLoading(true);
      // new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve('hi');
      //   }, 1500)
      // }).then(() => {
      //   setLoading(false);
      //   setStatusCode(200);
      //   // actions.resetForm();
      //   setTimeout(() => {
      //     setStatusCode(null);
      //   }, 3000);
      // })

      const { data, error, status } = await supabase.rpc('create_channel' ,{
        channel_name_: values.channelName,
        channel_password_: values.channelPassword,
        channel_owner_id_: auth.session?.user?.id
      });

      if(error) {
        return console.log(error);
      };

      setLoading(false);
      setStatusCode(status);
      actions.resetForm();

      console.log(data, status)

      // this timeout is used to animate a success indicator next to submit button.
      // it'll be cleared once the component unmounts.
      statusCodeTimeout = setTimeout(() => {
        setStatusCode(null);
      }, 3000);
    },
    validationSchema: validationSchema
  });

  useEffect(() => {
    return () => {
      if(statusCodeTimeout) {
        clearTimeout(statusCodeTimeout);
      }
    }
  }, [])

  return (
    <Wrapper>
      <HTwo>New channel</HTwo>
      <Text style={{ fontSize: '1.2rem'}}>Create a brand new channel, customize it, and invite people to join.</Text>
      <Callout style={{margin: '1rem 0'}}>
        <Text style={{ fontSize: '1rem', fontStyle: 'italic', marginLeft: '1rem' }}>
          Note that channel password is optional. Leave it blank if you'd like this channel to be open to public.
        </Text>
      </Callout>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="text"
          name="channelName"
          label="Name"
          data-testid="create-channel-name"
          error={touched.channelName && errors.channelName ? errors.channelName : null}
          value={values.channelName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "
          autoComplete="off"/>
        <br />
        <Input
          type="password"
          name="channelPassword"
          label="Password (optional)"
          data-testid="create-channel-password"
          error={touched.channelPassword && errors.channelPassword ? errors.channelPassword : null}
          value={values.channelPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "
          autoComplete="off"/>
        <br />
        <Input
          type="password"
          name="channelPasswordConfirm"
          label="Confirm Password"
          data-testid="create-channel-password-confirm"
          error={touched.channelPasswordConfirm && errors.channelPasswordConfirm ? errors.channelPasswordConfirm : null}
          value={values.channelPasswordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "
          autoComplete="false"/>
        <br />
        <ButtonGroup>
          <Button
            type="submit"
            bgColor="orange"
            foreColor="black"
            disabled={!isValid || loading || statusCode !== null}>{loading ? (<><Spinner style={{marginRight: '8px'}}/> <span>Create channel</span></>) : 'Create channel'}</Button>
          {!loading && statusCode === 200 && <SuccessIndicator />}
        </ButtonGroup>
      </Form>
    </Wrapper>
  )
}