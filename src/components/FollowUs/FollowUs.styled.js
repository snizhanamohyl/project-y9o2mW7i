import styled from 'styled-components';
import SectionTitle from 'components/SectionTitle/SectionTitle';

export const Wrapper = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
    display: block;
  }
`;

export const Title = styled(SectionTitle)`
  margin-bottom: 40px;
`;

export const Socials = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Item = styled.li`
  svg {
    fill: var(--accent);
    transition: fill var(--transition-time) var(--transition-function);
  }

  a:hover,
  a:focus {
    outline: none;

    svg {
      fill: var(--hover-dark);
    }
  }
`;
