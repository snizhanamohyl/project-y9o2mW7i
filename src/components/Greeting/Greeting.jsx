import { WelcomeWrapper, StyledTitle, StyledText } from './Greeting.styled';
import Logo from 'components/Logo/Logo'
import AuthNav from '../AuthNav/AuthNav';
import useWindowWidth from 'hooks/useWindowWidth';

export default function Greeting() { 
  const width = useWindowWidth();
  const logoSize = width < 768 ? 54 : 68;

  return (
    <WelcomeWrapper>
      <Logo size={logoSize}/>
      <StyledTitle>Welcome to the app!</StyledTitle>
      <StyledText>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </StyledText>

      <AuthNav />
    </WelcomeWrapper>
  );
}