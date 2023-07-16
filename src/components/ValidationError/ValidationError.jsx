import { ErrorMessage } from './ValidationError.styled';

export default function ValidationError({ children, ...otherProps }) {
  return <ErrorMessage {...otherProps}>{children}</ErrorMessage>;
}
