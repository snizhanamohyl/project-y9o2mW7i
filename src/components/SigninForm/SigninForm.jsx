import { Formik, Form, ErrorMessage } from 'formik';
import { userSigninSchema } from 'schemas/userSigninSchema';
import { useDispatch, useSelector } from 'react-redux';
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
  ServerError,
} from 'pages/SigninPage/SigninPage.styled';

const initialValues = {
  email: '',
  password: '',
};

export const SigninForm = () => {
  const dispatch = useDispatch();

  const serverError = useSelector(state => state.auth.serverError);

  const handlesubmit = (values, actions) => {
    dispatch(login(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSigninSchema}
      onSubmit={handlesubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          {(errors.email && touched.email) || serverError ? (
            <ErrorInput name="email" placeholder="Email" />
          ) : (
            <Input name="email" placeholder="Email" />
          )}

          {(errors.email && touched.email) || serverError ? (
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

          {((errors.email && touched.email) || serverError) && (
            <MailCrossSvg width={20} height={20}>
              <use href={Sprite + '#icon-red-x-20x20'}></use>
            </MailCrossSvg>
          )}
          <ErrorMessage component={Error} name="email" />
          {serverError && <ServerError>{serverError}</ServerError>}

          {(errors.password && touched.password) || serverError ? (
            <ErrorLastInput
              type="password"
              name="password"
              placeholder="Password"
            />
          ) : (
            <LastInput type="password" name="password" placeholder="Password" />
          )}
          {(errors.password && touched.password) || serverError ? (
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
          {((errors.password && touched.password) || serverError) && (
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
