import { StyledButton } from './Button.styled';

export default function Button({ children, ...otherProps }) {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
}
