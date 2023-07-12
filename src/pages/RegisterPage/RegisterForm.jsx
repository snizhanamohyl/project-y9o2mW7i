import { Formik, Form, ErrorMessage } from 'formik';
import { schema } from './schema';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import Sprite from 'assets/sprite.svg';

import {
  Input,
  LastInput,
  Button,
  SvgMan,
  SvgEmail,
  SvgPass,
  Error,
  ErrorEmail,
  ErrorPass,
  ErrorInput,
  ErrorLastInput,
  RedCrossSvg,
  PassCrossSvg,
  MailCrossSvg,
  SvgDiv,
  SvgDivError,
} from './RegisterPageStyles';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handlesubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();

    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handlesubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          {Object.keys(errors).length > 0 ? (
            <ErrorInput type="text" name="name" placeholder="Name" />
          ) : (
            <Input type="text" name="name" placeholder="Name" />
          )}
          {Object.keys(errors).length > 0 ? (
            <SvgDivError>
              <SvgMan>
                <use href={Sprite + '#icon-user'}></use>
              </SvgMan>
            </SvgDivError>
          ) : (
            <SvgDiv>
              <SvgMan>
                <use href={Sprite + '#icon-user'}></use>
              </SvgMan>
            </SvgDiv>
          )}
          {Object.keys(errors).length > 0 && (
            <RedCrossSvg width={20} height={20}>
              <use href={Sprite + '#icon-red-x-20x20'}></use>
            </RedCrossSvg>
          )}

          <ErrorMessage component={Error} name="name" />
          {Object.keys(errors).length > 0 ? (
            <ErrorInput name="email" placeholder="Email" />
          ) : (
            <Input name="email" placeholder="Email" />
          )}

          {Object.keys(errors).length > 0 ? (
            <SvgDivError>
              <SvgEmail>
                <use href={Sprite + '#icon-letter'}></use>
              </SvgEmail>
            </SvgDivError>
          ) : (
            <SvgDiv>
              <SvgEmail>
                <use href={Sprite + '#icon-letter'}></use>
              </SvgEmail>
            </SvgDiv>
          )}
          {Object.keys(errors).length > 0 && (
            <MailCrossSvg width={20} height={20}>
              <use href={Sprite + '#icon-red-x-20x20'}></use>
            </MailCrossSvg>
          )}
          <ErrorMessage component={ErrorEmail} name="email" />
          {Object.keys(errors).length > 0 ? (
            <ErrorLastInput
              type="password"
              name="password"
              placeholder="Password"
            />
          ) : (
            <LastInput type="password" name="password" placeholder="Password" />
          )}

          {Object.keys(errors).length > 0 ? (
            <SvgDivError>
              <SvgPass>
                <use href={Sprite + '#icon-lock'}></use>
              </SvgPass>
            </SvgDivError>
          ) : (
            <SvgDiv>
              <SvgPass>
                <use href={Sprite + '#icon-lock'}></use>
              </SvgPass>
            </SvgDiv>
          )}
          {Object.keys(errors).length > 0 && (
            <PassCrossSvg width={20} height={20}>
              <use href={Sprite + '#icon-red-x-20x20'}></use>
            </PassCrossSvg>
          )}
          <ErrorMessage component={ErrorPass} name="password" />
          <Button type="submit">Sign up</Button>
        </Form>
      )}
    </Formik>
  );
};
