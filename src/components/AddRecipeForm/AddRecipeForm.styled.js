import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 72px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--backdrop-color);
`;
