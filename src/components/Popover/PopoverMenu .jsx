import { EditLink, LogOutBtn } from './PopoverMenu.styled'
import sprite from '../../assets/sprite.svg';




export default function PopoverMenu() {
  return (
    <>
      <EditLink>
        <p>Edit profile</p>
        <svg>
          <use href={sprite + '#icon-arrow-right'}></use>
        </svg>
      </EditLink>
      <LogOutBtn>Log out</LogOutBtn>
    </>
  );
}
