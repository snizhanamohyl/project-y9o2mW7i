import { SigninForm } from './SigninForm';
import registerImg from '../../assets/images/desktop/registration.png';

import {
  Img,
  Section,
  Wrapper,
  Title,
  Link,
  Container,
} from './SigninPageStyles';

export default function SigninPage() {
  return (
    <Container>
      <Img src={registerImg} alt="signup" />
      <Section>
        <Wrapper>
          <Title>Sign In</Title>
          <SigninForm />
        </Wrapper>
        <Link to="/register">Registration</Link>
      </Section>
    </Container>
  );
}
