import { Title } from './MainTitle.styled';

export default function MainTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
}
