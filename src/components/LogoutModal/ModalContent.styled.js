import { styled } from '@mui/system';

export const ModalContent = styled('div')`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 179px;
  padding: 44px 24px;
  border-radius: 30px;
  background-color: var(--bg-color);
  box-shadow: var(--modal-shadow);

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 215px;
    padding: 50px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    padding: 50px 50px;
  }
`;
