import { Formik, Form, ErrorMessage } from 'formik';
import { userRegisterSchema } from 'schemas/userRegisterSchema';
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
} from '../../pages/RegisterPage/RegisterPage.styled';

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
      validationSchema={userRegisterSchema}
      onSubmit={handlesubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, touched }) => (
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
          {errors.email && touched.email ? (
            <ErrorInput name="email" placeholder="Email" />
          ) : (
            <Input name="email" placeholder="Email" />
          )}

          {errors.email && touched.email ? (
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
          {errors.email && touched.email && (
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
            <LastInput type="password" name="password" placeholder="Password" />
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
          <Button type="submit">Sign up</Button>
        </Form>
      )}
    </Formik>
  );
};
