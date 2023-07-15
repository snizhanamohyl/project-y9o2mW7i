import styled from 'styled-components';
export const Container = styled.div`
  max-width: 343px;
  min-height: 250px;
  @media (min-width: 768px) {
    width: 433px;
    height: 332px;
  }
  @media (min-width: 1440px) {
    width: 433px;
    height: 332px;
  }

  div {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;

    border-radius: 8px;
  }
  iframe {
    display: block;
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
`;
