import { styled } from '@mui/system';
import { IconButton } from '@mui/material';

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
  height: 327px;
  padding: 32px 24px;
  border-radius: 24px;
  background-color: var(--bg-color);
  box-shadow: var(--modal-shadow); 
  
  @media screen and (min-width: 768px) {
    width: 480px;
    height: 402px;
    padding: 50px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 425px;
    padding: 50px 50px;
  }
`;

export const CloseButton = styled(IconButton)`
  position: relative;
  top: 10px;
  right: 10px;
`;

