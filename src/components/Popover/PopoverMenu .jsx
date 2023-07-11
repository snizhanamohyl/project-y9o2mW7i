import { EditLink, LogOutBtn } from './PopoverMenu.styled'
import sprite from 'assets/sprite.svg'

export default function PopoverMenu() {
  return (
    <>
      <EditLink>
        Edit profile
        <svg width="14" height="14">
          <use href={`${sprite}#icon-pencil`}></use>
        </svg>
      </EditLink>
      <LogOutBtn>
        Log out
        <svg width="18" height="18">
          <use href={`${sprite}#icon-arrow-right`}></use>
        </svg>
      </LogOutBtn>
    </>
  );
}
