import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

import registerMob from 'assets/images/mobile/registerMob.png';
import registerMobRet from 'assets/images/mobile/registerMobRet.png';
import registerTab from 'assets/images/tablet/registerTab.png';
import registerTabRet from 'assets/images/tablet/registerTabRet.png';
import registerDesk from 'assets/images/desktop/registerDesk.png';
import registerDeskRet from 'assets/images/desktop/registerDeskRet.png';

import {
  Img,
  Section,
  Wrapper,
  Title,
  Link,
  Container,
} from './RegisterPage.styled';

const srcsetMob = `${registerMob} 1x, ${registerMobRet} 2x`;
const srcsetTab = `${registerTab} 1x, ${registerTabRet} 2x`;
const srcsetDesk = `${registerDesk} 1x, ${registerDeskRet} 2x`;

export default function RegisterPage() {
  return (
    <Container>
      <Img>
        <source srcSet={srcsetDesk} media="(min-width: 1440px)" />
        <source srcSet={srcsetTab} media="(min-width: 768px)" />
        <source srcSet={srcsetMob} media="(max-width: 767px)" />
        <img
          src={registerDeskRet}
          alt="register-page"
        ></img>
      </Img>
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
