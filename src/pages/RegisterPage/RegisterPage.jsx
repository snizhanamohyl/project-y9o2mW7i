import { RegisterForm } from './RegisterForm';
import registerImg from '../../images/Registration.png';

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
