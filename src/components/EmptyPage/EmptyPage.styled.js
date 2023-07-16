import styled from 'styled-components';

export const Image = styled.picture`
  display: block;
  margin: 0 auto;
  width: 208px;
  height: 133px;
  @media (min-width: 768px) {
    width: 350px;
    height: 225px;
  }
`;

export const Description = styled.p`
  margin-top: 24px;
  color: var(--black);
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.48px;
  text-align: center;
  opacity: 0.5;
  @media (min-width: 768px) {
    margin-top: 32px;
    font-size: 24px;
  }
`;
