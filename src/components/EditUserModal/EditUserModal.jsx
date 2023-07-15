import ReactDOM from 'react-dom';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Modal } from '@mui/material';
import sprite from 'assets/sprite.svg';
import { ModalContent, } from './EditUserModal.styled';
import {CloseButton, CloseIcon, UploadWindow, UploadLabel, UploadInput,Form, PlusIcon, UserIcon,
  UserIconAvatar, PencilIcon, NameEditInput, SaveButton} from './ModalContent.styled';

const portal = document.getElementById('modal-root');

export default function EditUserModal({ isOpen, handleCloseModal, handleOpenModal }) {
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  
  const handleFileUpload = e => {
    const file = e.target.files[0];
    if (file) {
      const avatarUrl = URL.createObjectURL(file);
      setUserAvatar(avatarUrl);
    }
  };

  const handleUserNameChange = e => {
    setUserName(e.target.value);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Perform save changes logic here
    console.log('User Name:', userName);
    console.log('Photo URL:', userAvatar);
  };


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

            <UploadInput type="file" name="userAvatar" onChange={handleFileUpload}/>
          </UploadLabel>

          <NameEditInput type="text" value={userName} name="userName" onChange={handleUserNameChange}/>
          <UserIcon width="18" height="18">
            <use href={`${sprite}#icon-user`}></use>
          </UserIcon>
          
          <PencilIcon width="17" height="17">
            <use href={`${sprite}#icon-pencil`}></use>
          </PencilIcon>

          <SaveButton type="submit" onClick={handleSaveChanges}>Save changes</SaveButton>
        </Form>
      </ModalContent>

    </Modal>,
    portal
  );
}
