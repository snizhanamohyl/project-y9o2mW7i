import React, { useState } from 'react';

import sprite from 'assets/sprite.svg';
import { EditBtn, LogOutBtn } from './PopoverMenu.styled';

import CustomModal from 'components/Modal/Modal'
import EditUserForm from '../EditUserForm/EditUserForm';
import LogoutModal from 'components/LogoutModal/LogoutModal';


export default function PopoverMenu() {

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const toggleEditModal = () => { setIsEditModalOpen(!isEditModalOpen); }
  const toggleLogoutModal = () => { setLogoutModalOpen(!isLogoutModalOpen);}

  return (
    <>
      <EditBtn type="button" onClick={toggleEditModal}>
        Edit profile
        <svg width="14" height="14">
          <use href={`${sprite}#icon-pencil`}></use>
        </svg>
      </EditBtn>
      <LogOutBtn
        type="button"
        onClick={toggleLogoutModal}

      >
        Log out
        <svg width="18" height="18">
          <use href={`${sprite}#icon-arrow-right`}></use>
        </svg>
      </LogOutBtn>

      {isEditModalOpen && (
        <CustomModal
          isOpen={isEditModalOpen}
          handleCloseModal={toggleEditModal}
        >
          <EditUserForm handleCloseModal={toggleEditModal} />
        </CustomModal>
      )}

      {isLogoutModalOpen && (
        <CustomModal
          isOpen={isLogoutModalOpen}
          handleCloseModal={toggleLogoutModal}
        >
          <LogoutModal handleCloseModal={toggleLogoutModal} />
        </CustomModal>
      )}
    </>
  );
}
