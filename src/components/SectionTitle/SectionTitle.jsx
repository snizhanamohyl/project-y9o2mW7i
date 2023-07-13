import { Title } from './SectionTitle.styled';

export default function SectionTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
}
