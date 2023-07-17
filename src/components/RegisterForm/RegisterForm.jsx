import { Formik, Form, ErrorMessage } from 'formik';
import { Oval } from 'react-loader-spinner';
import { userRegisterSchema } from 'schemas/userRegisterSchema';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/auth-operations';
import {
  getServerError,
  getIsLoading,
  getServerErrorStatus,
  getResetForm,
} from 'redux/auth/selectors';
import useWindowWidth from 'hooks/useWindowWidth';
import Sprite from 'assets/sprite.svg';
import Notification from 'components/Notification/Notification';

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
  Loader,
  ServerError,
} from 'pages/RegisterPage/RegisterPage.styled';

import {
  MessageConteinerMedium,
  MessageConteinerStrong,
} from './MessageConteiner.style';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const width = useWindowWidth();
  const spinnerSize = width < 768 ? 18 : 20;

  const serverError = useSelector(getServerError);
  const isLoading = useSelector(getIsLoading);
  const serverErrorStatus = useSelector(getServerErrorStatus);
  const resetForm = useSelector(getResetForm);

  const handlesubmit = (values, actions) => {
    dispatch(register(values))
      .then(() => {
        resetForm && actions.resetForm();
      })
      .catch(error => {
        // Handle login error
      });
  };

  const getPasswordStrength = password => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);

    if (
      password.length >= 8 &&
      password.length <= 16 &&
      (!hasUpperCase || !hasLowerCase) &&
      hasNumbers
    ) {
      return 'Medium';
    }
    if (
      password.length >= 8 &&
      password.length <= 16 &&
      (hasUpperCase || hasLowerCase) &&
      hasNumbers
    ) {
      return 'Strong';
    }
    return;
  };

  return (
    <>
      {serverError && (
        <Notification text="Oops, something went wrong, please try again later" />
      )}
      <Formik
        key={'registerForm'}
        initialValues={initialValues}
        validationSchema={userRegisterSchema}
        onSubmit={handlesubmit}
        validateOnChange={true}
        validateOnBlur={false}
      >
        {({ errors, touched, values }) => (
          <Form autoComplete="off">
            {errors.name && touched.name ? (
              <ErrorInput type="text" name="name" placeholder="Name" />
            ) : (
              <Input type="text" name="name" placeholder="Name" />
            )}
            {errors.name && touched.name ? (
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
            {errors.name && touched.name && (
              <RedCrossSvg width={20} height={20}>
                <use href={Sprite + '#icon-red-x-20x20'}></use>
              </RedCrossSvg>
            )}
            <ErrorMessage component={Error} name="name" />

            {serverError &&
              serverErrorStatus !== 409 &&
              console.log(serverError)}

            {serverError && serverErrorStatus === 409 && (
              <ServerError>{serverError}</ServerError>
            )}

            {(errors.email && touched.email) ||
            (serverError && serverErrorStatus === 409) ? (
              <ErrorInput name="email" placeholder="Email" />
            ) : (
              <Input name="email" placeholder="Email" />
            )}

            {(errors.email && touched.email) ||
            (serverError && serverErrorStatus === 409) ? (
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
            {((errors.email && touched.email) ||
              (serverError && serverErrorStatus === 409)) && (
              <MailCrossSvg width={20} height={20}>
                <use href={Sprite + '#icon-red-x-20x20'}></use>
              </MailCrossSvg>
            )}
            <ErrorMessage component={ErrorEmail} name="email" />
            {errors.password && touched.password ? (
              <ErrorLastInput
                type="password"
                name="password"
                placeholder="Password"
              />
            ) : (
              <LastInput
                type="password"
                name="password"
                placeholder="Password"
              />
            )}
            {getPasswordStrength(values.password) === 'Medium' && (
              <MessageConteinerMedium>
                Your password is little secure
              </MessageConteinerMedium>
            )}
            {getPasswordStrength(values.password) === 'Strong' && (
              <MessageConteinerStrong>
                Password is secure
              </MessageConteinerStrong>
            )}

            {errors.password && touched.password ? (
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
            {errors.password && touched.password && (
              <PassCrossSvg width={20} height={20}>
                <use href={Sprite + '#icon-red-x-20x20'}></use>
              </PassCrossSvg>
            )}
            <ErrorMessage component={ErrorPass} name="password" />
            {isLoading ? (
              <>
                <Button type="submit" disabled>
                  Sign in
                  <Loader>
                    <Oval
                      height={spinnerSize}
                      width={spinnerSize}
                      color="#fafafa"
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="#fffff"
                      strokeWidth={8}
                      strokeWidthSecondary={8}
                    />
                  </Loader>
                </Button>
              </>
            ) : (
              <Button type="submit">Sign up</Button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
