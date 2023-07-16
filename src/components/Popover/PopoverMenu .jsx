import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from 'assets/sprite.svg';
import { EditBtn, LogOutBtn } from './PopoverMenu.styled';
import { logout } from 'redux/auth/auth-operations';
import EditUserModal from 'components/EditUserModal/EditUserModal';


export default function PopoverMenu() {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleModal =() => {setIsEditModalOpen(!isEditModalOpen);}

  return (
    <>
      <EditBtn type="button" onClick={toggleModal}>
        Edit profile
        <svg width="14" height="14">
          <use href={`${sprite}#icon-pencil`}></use>
        </svg>
      </EditBtn>
      <LogOutBtn
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log out
        <svg width="18" height="18">
          <use href={`${sprite}#icon-arrow-right`}></use>
        </svg>
      </LogOutBtn>

      {isEditModalOpen && (
        <EditUserModal
          isOpen={isEditModalOpen}
          handleCloseModal={toggleModal}
        />
      )}
    </>
  );
}
