import { ErrorMessage } from './ValidationError.styled';

export default function ValidationError({ children }) {
  return <ErrorMessage>{children}</ErrorMessage>;
}
