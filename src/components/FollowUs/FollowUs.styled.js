import styled from 'styled-components';
import SectionTitle from 'components/SectionTitle/SectionTitle';

export const Wrapper = styled.div`
  margin-bottom: ${({ $isFooter }) => ($isFooter ? 0 : '100px')};
`;

export const Title = styled(SectionTitle)`
  margin-bottom: 40px;
`;

export const Socials = styled.ul`
  display: flex;
  align-items: center;
  ${({ $isFooter }) => ($isFooter ? 'justify-content: center;' : '')}
  column-gap: 20px;

  & a {
    transition: color var(--transition-time) var(--transition-function);
    color: var(--add-socials);
  }

  & a:hover,
  & a:focus {
    outline: none;
    color: ${({ $isFooter }) =>
      $isFooter ? 'var(--bg-color)' : 'var(--dark-accent)'};
  }
`;
