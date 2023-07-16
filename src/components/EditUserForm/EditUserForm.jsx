import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import sprite from 'assets/sprite.svg';
import { useAuth } from 'hooks/useAuth';
import { updateUser } from 'redux/auth/auth-operations';
import {updateUserValidationSchema, SUPPORTED_FORMATS} from 'schemas/userUpdateSchema';

import { ModalContent } from './ModalContent.styled';
import {CloseIcon, CloseButton} from './EditUserForm.styled.js'

import {
  FormStyled, UserAvatarWrapper, AvatarLabel, PlusIcon, UserImgWrapper,
  InputButtonWrapper, NameLabel, NameInput, UserIconStyled, EditBtn,
  EditIcon, SubmitBtn, ErrorMessage} from './EditUserForm.styled.js';

export default function EditUserForm({ handleCloseModal }) {
    const { user } = useAuth();
  const dispatch = useDispatch();

    const [pathToUserAvatar, setPathToUserAvatar] = useState(user.avatarURL);

    const handleSubmit = values => {
      const formData = new FormData();
      // console.log(values);

      if (values.avatarURL === '') {
        values.avatarURL = user.avatarURL;
      }

      formData.append('name', values.name.trim());
      formData.append('avatarURL', values.avatarURL);

    
      dispatch(updateUser(formData))
        .unwrap()
        .then(() => toast.success('Changes saved!'))
        .catch(() => toast.error('Something went wrong...'));
      handleCloseModal();

    };

    return (
      <ModalContent>
        <CloseButton type="button" onClick={handleCloseModal}>
          <CloseIcon width="24px" height="24px">
            <use href={`${sprite}#icon-X`}></use>
          </CloseIcon>
        </CloseButton>

        <Formik
          initialValues={{
            avatarURL: '',
            name: user.name,
          }}
          validationSchema={updateUserValidationSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {props => (
            <FormStyled onSubmit={props.handleSubmit}>
              <UserAvatarWrapper>
                <AvatarLabel htmlFor="avatarURL">
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

                  <PlusIcon width="24px" height="24px">
                    <use href={`${sprite}#icon-plus-avatar`}></use>
                  </PlusIcon>
                </AvatarLabel>

                <input
                  type="file"
                  id="avatarURL"
                  name="avatarURL"
                  onBlur={() => {
                    props.setTouched({ avatarURL: true });
                  }}
                  onChange={event => {
                    if (event.target.files[0]) {
                      if (
                        SUPPORTED_FORMATS.includes(event.target.files[0].type)
                      ) {
                        setPathToUserAvatar(
                          window.URL.createObjectURL(event.target.files[0])
                        );
                        props.setFieldValue('avatarURL', event.target.files[0]);
                      }
                    } else {
                      setPathToUserAvatar(user.avatarURL);
                    }
                  }}
                />
              </UserAvatarWrapper>

              {props.errors.avatarURL && (
                <ErrorMessage location="file">
                  {props.errors.avatarURL}
                </ErrorMessage>
              )}

              <InputButtonWrapper>
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
                        : '1px solid #23262a'
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

                  <UserIconStyled width="18" height="18">
                    <use href={`${sprite}#icon-user`}></use>
                  </UserIconStyled>

                  {props.values.name && (
                    <EditBtn
                      type="button"
                      onClick={() => props.setFieldValue('name', '')}
                    >
                      <EditIcon width="17" height="17">
                        <use href={`${sprite}#icon-pencil`}></use>
                      </EditIcon>
                    </EditBtn>
                  )}
                </NameLabel>

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
                      (props.touched.avatarURL &&
                        props.values.avatarURL &&
                        !props.errors.avatarURL)
                    )
                  }
                >
                  Save changes
                </SubmitBtn>
              </InputButtonWrapper>
            </FormStyled>
          )}
        </Formik>
      </ModalContent>
    );
}