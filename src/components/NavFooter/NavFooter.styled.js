import styled from 'styled-components';

export const NavFooterList = styled.ul`
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-bottom: 72px;
    margin-right: 60px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 95px;
    margin-left: 205px;
    margin-right: 100px;
  }
`;

export const NavFooterItem = styled.li`
  margin-bottom: 14px;

  color: var(--bg-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  transition: var(--transition-time) var(--transition-function);

  &:hover {
    color: var(--footer-nav-hover);
  }

  &:focus {
    color: var(--footer-nav-hover);
  }

  &:last-child {
    margin-bottom: 0px;
  }

  @media (min-width: 768px) {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
