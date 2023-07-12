import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import registerImg from '../../assets/images/desktop/registration.png';

import {
  Img,
  Section,
  Wrapper,
  Title,
  Link,
  Container,
} from './RegisterPage.styled';

export default function RegisterPage() {
  return (
    <Container>
      <Img src={registerImg} alt="signup" />
      <Section>
        <Wrapper>
          <Title>Registration</Title>
          <RegisterForm />
        </Wrapper>
        <Link to="/signin">Sign in</Link>
      </Section>
    </Container>
  );
}
