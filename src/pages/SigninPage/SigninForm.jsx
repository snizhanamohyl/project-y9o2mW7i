import { Formik, Form, ErrorMessage } from 'formik';
import { schema } from './schema';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import Sprite from 'assets/sprite.svg';

import {
  Input,
  LastInput,
  Button,
  Svg,
  SvgPass,
  Error,
  ErrorPass,
  ErrorInput,
  ErrorLastInput,
  MailCrossSvg,
  PassCrossSvg,
  SvgDiv,
  SvgDivError,
} from './SigninPageStyles';

const initialValues = {
  email: '',
  password: '',
};

export const SigninForm = () => {
  const dispatch = useDispatch();

  const handlesubmit = (values, actions) => {
    console.log(values);
    console.log(actions);

    actions.resetForm();

    dispatch(login(values));
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
          {console.log(errors)}
          {Object.keys(errors).length > 0 ? (
            <ErrorInput name="email" placeholder="Email" />
          ) : (
            <Input name="email" placeholder="Email" />
          )}

          {Object.keys(errors).length > 0 ? (
            <SvgDivError>
              <Svg>
                <use href={Sprite + '#icon-letter'}></use>
              </Svg>
            </SvgDivError>
          ) : (
            <SvgDiv>
              <Svg>
                <use href={Sprite + '#icon-letter'}></use>
              </Svg>
            </SvgDiv>
          )}
          {Object.keys(errors).length > 0 && (
            <MailCrossSvg width={20} height={20}>
              <use href={Sprite + '#icon-red-x-20x20'}></use>
            </MailCrossSvg>
          )}
          <ErrorMessage component={Error} name="email" />
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
              <SvgPass width={20} height={20}>
                <use href={Sprite + '#icon-lock'}></use>
              </SvgPass>
            </SvgDivError>
          ) : (
            <SvgDiv>
              <SvgPass width={20} height={20}>
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
          <Button type="submit">Sign in</Button>
        </Form>
      )}
    </Formik>
  );
};
