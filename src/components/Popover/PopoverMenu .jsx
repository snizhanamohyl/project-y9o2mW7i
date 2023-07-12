import { EditBtn, LogOutBtn } from './PopoverMenu.styled';
import sprite from 'assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';

export default function PopoverMenu() {
  const dispatch = useDispatch();

  return (
    <>
      <EditBtn type="button">
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
    </>
  );
}
