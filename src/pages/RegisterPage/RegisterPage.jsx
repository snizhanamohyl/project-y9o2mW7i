import { RegisterForm } from './RegisterForm';
import registerImg from '../../assets/images/desktop/registration.png';

import {
  Img,
  Section,
  Wrapper,
  Title,
  Link,
  Container,
} from './RegisterPageStyles';

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
