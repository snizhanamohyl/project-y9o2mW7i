import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { ModalContent } from './ModalContent.styled';
import sprite from 'assets/sprite.svg';
import {CloseButton, CloseIcon, ConfirmTitle,BtnWrapper,
  LogoutBtn, CancelBtn} from './LogoutModal.styled';

export default function LogoutModal({ handleCloseModal }) {
  const dispatch = useDispatch();

    return (
      <ModalContent>
        <CloseButton type="button" onClick={handleCloseModal}>
          <CloseIcon width="24px" height="24px">
            <use href={`${sprite}#icon-X`}></use>
          </CloseIcon>
        </CloseButton>

        <ConfirmTitle>Are you sure you want to log out?</ConfirmTitle>
        
        <BtnWrapper>
          <LogoutBtn
            type="button"
            onClick={() => {dispatch(logout())}}>
            Log out</LogoutBtn>
          
          <CancelBtn type="button" onClick={handleCloseModal}>
            Cancel
          </CancelBtn>
        </BtnWrapper>
      </ModalContent>
    );
}
