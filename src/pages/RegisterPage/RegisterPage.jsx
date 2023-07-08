import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from '@emotion/styled';

const Img = styled.img`
  width: 285px;
  height: 250px;
  margin-top: 87px;
  margin-left: 45px;
  margin-right: 45px;
`;

const Section = styled.div`
  height: 490px;
  background-size: contain;
  background-image: url(images/bg-mob.png);
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 335px;
  height: 350px;
  margin: auto;
  background-color: #2a2c36;
  border-radius: 30px;
  padding-top: 32px;
  padding-left: 28px;
  padding-right: 28px;
  position: relative;
  z-index: 10;
  margin-bottom: 18px;
`;

const Title = styled.h1`
  color: #fafafa;
  font-size: 24;
  line-height: 1.17;
  margin-bottom: 18px;
`;

const Input = styled(Field)`
  box-sizing: border-box;
  font-family: inherit;
  font-size: 14px;
  width: 279px;
  height: 45px;
  margin-bottom: 12px;
  border-radius: 6px;
  border: 0.5px solid #fafafa;
  background-color: transparent;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #fafafa;
  }
  :-ms-input-placeholder {
    color: #fafafa;
  }
`;

const LastInput = styled(Input)`
  margin-bottom: 28px;
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 279px;
  height: 45px;
  background-color: #8baa36;
  padding: 12px 106px;
  border-radius: 6px;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.13;
  color: #fafafa;
`;

const Link = styled.a`
  font-family: inherit;
  font-size: 14px;
  color: #fafafa;
  margin: auto;
  display: block;
  text-align: center;
  text-decoration: underline;
`;

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
    <>
      <Img src="images/Reg-mob.png" alt="signup" />
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
              <ErrorMessage component="div" name="name" />
              <Input type="email" name="email" placeholder="Email" />
              <ErrorMessage component="div" name="email" />
              <LastInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage component="div" name="password" />
              <Button type="submit">Sign up</Button>
            </Form>
          </Formik>
        </Wrapper>
        <Link href="/">Sign in</Link>
      </Section>
    </>
  );
}
