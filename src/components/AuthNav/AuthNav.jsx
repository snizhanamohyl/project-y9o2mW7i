import { BtnWrapper, SignUpBtn, SignInBtn } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <BtnWrapper>
      <SignUpBtn to="/register">Registration</SignUpBtn>
      <SignInBtn to="/signIn">SignIn</SignInBtn>
    </BtnWrapper>
  );
}
