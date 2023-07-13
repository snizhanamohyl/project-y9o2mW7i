import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

export const StyledScrollBar = styled(SimpleBar)`
  min-width: 100%;
  width: max-content;
  max-height: 144px;

  .simplebar-scrollbar::before {
    background-color: var(--scroll-bar-color);
    width: 4px;
  }
  .simplebar-scrollbar.simplebar-visible::before {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    max-height: 162px;
  }
`;
