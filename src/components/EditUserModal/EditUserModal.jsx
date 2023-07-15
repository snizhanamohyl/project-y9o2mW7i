// import ReactDOM from 'react-dom';
// import React, { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// import { Modal } from '@mui/material';
// import sprite from 'assets/sprite.svg';
// import { ModalContent, } from './EditUserModal.styled';
// import {CloseButton, CloseIcon, UploadWindow, UploadLabel, UploadInput,Form, PlusIcon, UserIcon,
//   UserIconAvatar, PencilIcon, NameEditInput, SaveButton} from './ModalContent.styled';

// const portal = document.getElementById('modal-root');

// export default function EditUserModal({ isOpen, handleCloseModal, handleOpenModal }) {
//   // const { user } = useAuth();
//   // const dispatch = useDispatch();
//   const [pathToUserAvatar, setPathToUserAvatar] = useState(user.avatar);

//   const handleSubmit = values => {
//     const formData = new FormData();

//     if (values.avatar === '') {
//       values.avatar = user.avatar;
//     }
//     formData.append('name', values.name.trim());
//     formData.append('avatar', values.avatar);

//     dispatch(updateUser(formData))
//       .unwrap()
//       .then(() => toast.success('editUser.success'))
//       .catch(() => toast.error('editUser.error'));
//     handleCloseModal();
//   };

//   if (!isOpen) return null;


//   return ReactDOM.createPortal(
//     <Modal open={handleOpenModal} onClose={handleCloseModal}>

//       <ModalContent>
//         <CloseButton type="button" onClick={handleCloseModal}>
//           <CloseIcon width="24px" height="24px">
//             <use href={`${sprite}#icon-X`}></use>
//           </CloseIcon>
//         </CloseButton>

//         <Form name="user-edit">
//           <UploadLabel htmlFor="userAvatar">
//             <UploadWindow>
//               <UserIconAvatar width="40" height="40">
//                 <use href={`${sprite}#icon-user`}></use>
//               </UserIconAvatar>
//             </UploadWindow>

//             <PlusIcon width="24px" height="24px">
//               <use href={`${sprite}#icon-plus-avatar`}></use>
//             </PlusIcon>

//             <UploadInput type="file" name="userAvatar" onChange={handleFileUpload}/>
//           </UploadLabel>

//           <NameEditInput type="text" value={userName} name="userName" onChange={handleUserNameChange}/>
//           <UserIcon width="18" height="18">
//             <use href={`${sprite}#icon-user`}></use>
//           </UserIcon>
          
//           <PencilIcon width="17" height="17">
//             <use href={`${sprite}#icon-pencil`}></use>
//           </PencilIcon>

//           <SaveButton type="submit" onClick={handleSaveChanges}>Save changes</SaveButton>
//         </Form>
//       </ModalContent>

//     </Modal>,
//     portal
//   );
// }

import ReactDOM from 'react-dom';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@mui/material';
import { ModalContent } from './EditUserModal.styled';
import { Formik } from 'formik';
// import { toast } from 'react-toastify';
import sprite from 'assets/sprite.svg';
import { CloseButton, CloseIcon } from './ModalContent.styled';
// import { useAuth } from 'hooks';
// import { updateUser } from 'redux/Auth/authOperations';
// import { selectTheme } from 'redux/Theme/themeSelectors';
// import {
//   updateUserValidationSchema,
//   SUPPORTED_FORMATS,
// } from '../../../helpers';

// import { ReactComponent as DefaultAvatar } from '../../../images/icons/user-40.svg';
// import { ReactComponent as EditIcon } from '../../../images/icons/edit-01.svg';
import {
  FormStyled,
  UserAvatarWrapper,
  UserImgWrapper,
  // InputButtonWrapper,
  // NameLabel,
  // NameInput,
  // UserIconStyled,
  // EditBtn,
  // SubmitBtn,
  ErrorMessage,
} from './ModalContent.styled';




const portal = document.getElementById('modal-root');

export default function EditUserModal({ isOpen, handleCloseModal, handleOpenModal }) {


    const { user } = useAuth();
    // const dispatch = useDispatch();
    const [pathToUserAvatar, setPathToUserAvatar] = useState(user.avatar);
    // const theme = useSelector(selectTheme);


    // const handleSubmit = values => {
    //   const formData = new FormData();

    //   if (values.avatar === '') {
    //     values.avatar = user.avatar;
    //   }
    //   formData.append('name', values.name.trim());
    //   formData.append('avatar', values.avatar);

    //   dispatch(updateUser(formData))
    //     .unwrap()
    //     .then(() => toast.success('editUser.success'))
    //     .catch(() => toast.error('editUser.error'));
    //   handleCloseModal();
    // };

  if (!isOpen) return null;
  
    return ReactDOM.createPortal(
      <Modal open={handleOpenModal} onClose={handleCloseModal}>
        <ModalContent>
          <CloseButton type="button" onClick={handleCloseModal}>
            <CloseIcon width="24px" height="24px">
              <use href={`${sprite}#icon-X`}></use>
            </CloseIcon>
          </CloseButton>

          <Formik
            initialValues={{
              avatar: '',
              name: user.name,
            }}
            // validationSchema={updateUserValidationSchema}
            // onSubmit={(values, actions) => {
            //   handleSubmit(values);
            //   actions.setSubmitting(false);
            //   actions.resetForm();
            // }}
          >
            {props => (
              <FormStyled onSubmit={props.handleSubmit}>
                <UserAvatarWrapper>
                  <label htmlFor="avatar">
                    {pathToUserAvatar ? (
                      <UserImgWrapper>
                        <img src={pathToUserAvatar} alt="user-avatar" />
                      </UserImgWrapper>
                    ) : (
                      <UserImgWrapper>
                        <svg width="40" height="40">
                          <use href={`${sprite}#icon-user-default`}></use>
                        </svg>
                      </UserImgWrapper>
                    )}
                  </label>
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    onBlur={() => {
                      props.setTouched({
                        avatar: true,
                      });
                    }}
                    onChange={
                      event => {
                        if (event.target.files[0]) {
                          // if (
                          //   SUPPORTED_FORMATS.includes(event.target.files[0].type)
                          // ) {
                          setPathToUserAvatar(
                            window.URL.createObjectURL(event.target.files[0])
                          );
                          props.setFieldValue('avatar', event.target.files[0]);
                        }
                      }
                      // else {
                      //   setPathToUserAvatar(user.avatar);
                      // }
                    }
                  />
                </UserAvatarWrapper>
                {props.errors.avatar && (
                  <ErrorMessage location="file">
                    {props.errors.avatar}
                  </ErrorMessage>
                )}
                {/* <InputButtonWrapper>
                  <NameLabel htmlFor="name" id="labelName">
                    <NameInput
                      type="text"
                      name="name"
                      id="name"
                      value={props.values.name}
                      border={
                        props.touched.name && props.errors.name
                          ? '1px solid #E74A3B'
                          : props.touched.name && props.isValid
                          ? '1px solid #3CBC81'
                          : theme === 'light'
                          ? '1px solid #23262a'
                          : '1px solid #FAFAFA'
                      }
                      onBlur={() => {
                        props.setTouched({
                          name: true,
                        });
                      }}
                      onChange={event => {
                        props.setTouched({
                          name: true,
                        });
                        props.setFieldValue('name', event.target.value);
                      }}
                    />
                    <UserIconStyled
                      stroke={
                        props.touched.name && props.errors.name
                          ? '#E74A3B'
                          : props.touched.name && props.isValid
                          ? '#3CBC81'
                          : theme === 'light'
                          ? '#23262a'
                          : '#FAFAFA' */}
                } />
                {/* {props.values.name && (
                      <EditBtn
                        type="button"
                        onClick={() => props.setFieldValue('name', '')}
                      >
                        <EditIcon />
                      </EditBtn>
                    )} */}
                {/* </NameLabel>
                  {props.errors.name ? (
                    <ErrorMessage>{props.errors.name}</ErrorMessage>
                  ) : null}
                  <SubmitBtn
                    type="submit"
                    disabled={
                      !(
                        (props.touched.name &&
                          props.values.name &&
                          !props.errors.name) ||
                        (props.touched.avatar &&
                          props.values.avatar &&
                          !props.errors.avatar)
                      )
                    }
                  >
                    {'editUser.saveBtn'} */}
                {/* </SubmitBtn> */}
                {/* </InputButtonWrapper> */}
              </FormStyled>
            )}
          </Formik>
        </ModalContent>
      </Modal>,
      portal
    );
}