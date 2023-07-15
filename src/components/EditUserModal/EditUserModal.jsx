import ReactDOM from 'react-dom';
import { Modal } from '@mui/material';
import sprite from 'assets/sprite.svg';
import { ModalContent, } from './EditUserModal.styled';
import {CloseButton, CloseIcon, UploadWindow, UploadLabel, UploadInput,Form, PlusIcon, UserIcon,
  UserIconAvatar, PencilIcon, NameEditInput, SaveButton} from './ModalContent.styled';

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
          <UploadLabel htmlFor="userAvatar">
            <UploadWindow>
              <UserIconAvatar width="40" height="40">
                <use href={`${sprite}#icon-user`}></use>
              </UserIconAvatar>
            </UploadWindow>

            <PlusIcon width="24px" height="24px">
              <use href={`${sprite}#icon-plus-avatar`}></use>
            </PlusIcon>

            <UploadInput type="file" name="userAvatar" />
          </UploadLabel>

          <NameEditInput type="text" value={'Olena'} name="userName"/>
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
