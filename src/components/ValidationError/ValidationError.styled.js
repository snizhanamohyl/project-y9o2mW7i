import styled from 'styled-components';

export const ErrorMessage = styled.p`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;

  color: var(--error-red);
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;
