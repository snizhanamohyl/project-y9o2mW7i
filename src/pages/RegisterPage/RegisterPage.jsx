import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import {
  Img,
  Section,
  Wrapper,
  Title,
  Input,
  LastInput,
  Button,
  Link,
  Svg,
  SvgEmail,
  SvgPass,
  Container,
} from './RegisterPageStyles';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterPage() {
  const handlesubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Container>
      <Img src="images/Registration.png" alt="signup" />
      <Section>
        <Wrapper>
          <Title>Registration</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handlesubmit}
          >
            <Form>
              <Input type="text" name="name" placeholder="Name" />
              <Svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 14.25C13 13.2033 13 12.68 12.8708 12.2541C12.58 11.2953 11.8297 10.545 10.8709 10.2542C10.445 10.125 9.92167 10.125 8.875 10.125H5.125C4.07833 10.125 3.55499 10.125 3.12914 10.2542C2.17034 10.545 1.42003 11.2953 1.12918 12.2541C1 12.68 1 13.2033 1 14.25M10.375 4.125C10.375 5.98896 8.86396 7.5 7 7.5C5.13604 7.5 3.625 5.98896 3.625 4.125C3.625 2.26104 5.13604 0.75 7 0.75C8.86396 0.75 10.375 2.26104 10.375 4.125Z"
                  stroke="#FAFAFA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <ErrorMessage component="div" name="name" />
              <Input type="email" name="email" placeholder="Email" />
              <SvgEmail
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M1.5 5.75L7.62369 10.0366C8.11957 10.3837 8.36751 10.5573 8.6372 10.6245C8.87542 10.6839 9.12458 10.6839 9.3628 10.6245C9.63249 10.5573 9.88043 10.3837 10.3763 10.0366L16.5 5.75M5.1 15.5H12.9C14.1601 15.5 14.7902 15.5 15.2715 15.2548C15.6948 15.039 16.039 14.6948 16.2548 14.2715C16.5 13.7902 16.5 13.1601 16.5 11.9V7.1C16.5 5.83988 16.5 5.20982 16.2548 4.72852C16.039 4.30516 15.6948 3.96095 15.2715 3.74524C14.7902 3.5 14.1601 3.5 12.9 3.5H5.1C3.83988 3.5 3.20982 3.5 2.72852 3.74524C2.30516 3.96095 1.96095 4.30516 1.74524 4.72852C1.5 5.20982 1.5 5.83988 1.5 7.1V11.9C1.5 13.1601 1.5 13.7902 1.74524 14.2715C1.96095 14.6948 2.30516 15.039 2.72852 15.2548C3.20982 15.5 3.83988 15.5 5.1 15.5Z"
                    stroke="#FAFAFA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </SvgEmail>
              <ErrorMessage component="div" name="email" />
              <LastInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <SvgPass
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M12.75 8.75V6.5C12.75 4.42893 11.0711 2.75 9 2.75C6.92893 2.75 5.25 4.42893 5.25 6.5V8.75M5.85 16.25H12.15C13.4101 16.25 14.0402 16.25 14.5215 16.0048C14.9448 15.789 15.289 15.4448 15.5048 15.0215C15.75 14.5402 15.75 13.9101 15.75 12.65V12.35C15.75 11.0899 15.75 10.4598 15.5048 9.97852C15.289 9.55516 14.9448 9.21095 14.5215 8.99524C14.0402 8.75 13.4101 8.75 12.15 8.75H5.85C4.58988 8.75 3.95982 8.75 3.47852 8.99524C3.05516 9.21095 2.71095 9.55516 2.49524 9.97852C2.25 10.4598 2.25 11.0899 2.25 12.35V12.65C2.25 13.9101 2.25 14.5402 2.49524 15.0215C2.71095 15.4448 3.05516 15.789 3.47852 16.0048C3.95982 16.25 4.58988 16.25 5.85 16.25Z"
                    stroke="#FAFAFA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </SvgPass>
              <ErrorMessage component="div" name="password" />
              <Button type="submit">Sign up</Button>
            </Form>
          </Formik>
        </Wrapper>
        <Link to="/signin">Sign in</Link>
      </Section>
    </Container>
  );
}
