import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
    display: block;
  }
`;

export const Socials = styled.ul`
  margin-top: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  column-gap: 20px;

  list-style: none;
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
