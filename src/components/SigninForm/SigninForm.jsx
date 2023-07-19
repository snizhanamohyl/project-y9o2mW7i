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
import { resetError } from 'redux/auth/auth-slice';
import { useEffect, useState } from 'react';

const initialValues = {
  email: '',
  password: '',
};

export const SigninForm = () => {
  const [showNotific, setShowNotific] = useState(false);
  const dispatch = useDispatch();

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
        console.log(error)
      });
  };

  useEffect(() => {
    const onServerError = () => {
        if (serverError && (serverErrorStatus === 404 || serverErrorStatus === 500 )) {
        setShowNotific(true);
        dispatch(resetError());
      } 
    }

    onServerError();
  }, [dispatch, serverError, serverErrorStatus])

  return (
    <>
      { showNotific && <Notification setShowNotific={setShowNotific} text="Oops, something went wrong, please try again later" />}
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
