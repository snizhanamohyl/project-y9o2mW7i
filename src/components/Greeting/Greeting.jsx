import sprite from 'assets/sprite.svg';
import {WelcomeWrapper, Logo, StyledTitle,StyledText} from './Greeting.styled';
import AuthNav from '../AuthNav/AuthNav';

export default function Greeting() { 
  return (
    <WelcomeWrapper>
      <Logo width="68" height="68">
        <use href={`${sprite}#icon-logo-44x44BG`}></use>
      </Logo>
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