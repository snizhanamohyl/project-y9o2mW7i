import ReactDOM from 'react-dom';
import { ModalContent, } from './EditUserModal.styled';
import {
  CloseButton,
  CloseIcon, UploadInput, Form,
  InputWrapper,
  UserIcon,
  PencilIcon,
  NameEditInput,
  SaveButton,
} from './a.styled';
import { Modal } from '@mui/material';
import sprite from 'assets/sprite.svg';

const portal = document.getElementById('modal-root');

export default function EditUserModal({ isOpen, handleCloseModal, handleOpenModal }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Modal open={handleOpenModal} onClose={handleCloseModal}>
      <ModalContent>
        <CloseButton type="button" onClick={handleCloseModal}>
          <CloseIcon width="24px" height="24px">
            <use href={`${sprite}#icon-X`}></use>
          </CloseIcon>
        </CloseButton>

        <Form name="user-edit">
          <label htmlFor="iserAvatar">
            <CloseIcon width="40px" height="40px">
              <use href={`${sprite}#icon-plus-avatar`}></use>
            </CloseIcon>
          </label>
          <UploadInput type="file" name="userAvatar" />

          <InputWrapper>
            <NameEditInput
              type="text"
              value={'Olena'}
              name="userName"
              // onChange={handleUserNameChange}
            />
          </InputWrapper>
          <UserIcon width="18" height="18">
            <use href={`${sprite}#icon-user`}></use>
          </UserIcon>

          <PencilIcon width="17" height="17">
            <use href={`${sprite}#icon-pencil`}></use>
          </PencilIcon>

          <SaveButton type="submit">Save changes</SaveButton>
        </Form>
      </ModalContent>
    </Modal>,
    portal
  );
}
