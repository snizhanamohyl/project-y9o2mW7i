const { styled } = require('styled-components');

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  margin-right: 14px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid var(--accent);

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const AvatarImg = styled.img`
  object-fit: cover;
`;

export const UserName = styled.p`
  color: ${({ userColor }) => userColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.7;
`;

export const UserWrap = styled.button`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media (min-width: 768px) {
    margin-right: 50px;
  }
`;
