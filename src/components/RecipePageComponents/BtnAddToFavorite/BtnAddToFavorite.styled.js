import styled from 'styled-components';

export const BtnAddFavorite = styled.button`
  width: 150px;
  height: 35px;
  margin-bottom: 42px;

  background: ${({ $toggler }) => ($toggler ? 'var(--accent)' : 'transparent')};
  color: ${({ $toggler }) =>
    $toggler ? 'var(--bg-color)' : 'var(--dark-accent)'};
  &:hover {
    background: ${({ $toggler }) =>
      $toggler ? 'transparent' : 'var(--accent)'};
    color: ${({ $toggler }) =>
      $toggler ? 'var(--dark-accent)' : 'var(--bg-color)'};
  }

  border-radius: 24px 44px;
  border: 1px solid var(--accent);

  font-size: 10px;
  line-height: normal;

  @media (min-width: 768px) {
    margin-bottom: 60px;
    width: 278px;
    height: 59px;

    letter-spacing: -0.36px;
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;
