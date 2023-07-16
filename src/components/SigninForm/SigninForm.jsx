import { Formik, Form, ErrorMessage } from 'formik';
import { Oval } from 'react-loader-spinner';
import { userSigninSchema } from 'schemas/userSigninSchema';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import {
  getServerError,
  getIsLoading,
  getServerErrorStatus,
  getResetForm,
} from 'redux/auth/selectors';
// import { useNavigate } from 'react-router-dom';
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
  Loader,
} from 'pages/SigninPage/SigninPage.styled';
import useWindowWidth from 'hooks/useWindowWidth';

import Notification from 'components/Notification/Notification';

const initialValues = {
  email: '',
  password: '',
};

// const message = "but something went wrong, please try again later";

export const SigninForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const width = useWindowWidth();
  const spinnerSize = width < 768 ? 18 : 20;

  const serverError = useSelector(getServerError);
  const isLoading = useSelector(getIsLoading);
  const serverErrorStatus = useSelector(getServerErrorStatus);
  const resetForm = useSelector(getResetForm);

  const handlesubmit = (values, actions) => {
    dispatch(login(values))
      .then(() => {
        resetForm && actions.resetForm();
      })
      .catch(error => {
        // Handle login error
      });
  };

  return (
    <>
      {serverError && <Notification text="ТЕкс для передачі" />}
      <Formik
        initialValues={initialValues}
        validationSchema={userSigninSchema}
        onSubmit={handlesubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            {(errors.email && touched.email) ||
            (serverError && serverErrorStatus === 401) ? (
              <ErrorInput name="email" placeholder="Email" />
            ) : (
              <Input name="email" placeholder="Email" />
            )}

            {(errors.email && touched.email) ||
            (serverError && serverErrorStatus === 401) ? (
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

            {((errors.email && touched.email) ||
              (serverError && serverErrorStatus === 401)) && (
              <MailCrossSvg width={20} height={20}>
                <use href={Sprite + '#icon-red-x-20x20'}></use>
              </MailCrossSvg>
            )}
            <ErrorMessage component={Error} name="email" />
            {serverError && serverErrorStatus === 401 && (
              <ServerError>{serverError}</ServerError>
            )}
            {/* {serverError &&
            serverErrorStatus !== 401 &&
            navigate(`/error?message=${message}`)} */}

            {serverError &&
              serverErrorStatus !== 401 &&
              console.log(serverError)}

            {(errors.password && touched.password) ||
            (serverError && serverErrorStatus === 401) ? (
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
            {(errors.password && touched.password) ||
            (serverError && serverErrorStatus === 401) ? (
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
            {((errors.password && touched.password) ||
              (serverError && serverErrorStatus === 401)) && (
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
              <Button type="submit">Sign in</Button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
