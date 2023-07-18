import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Popover } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Avatar, AvatarImg, UserName, UserWrap, Letter} from './UserLogo.styled';
import PopoverMenu from 'components/Popover/PopoverMenu ';
import useWindowWidth from "hooks/useWindowWidth";
import { getUser } from 'redux/auth/selectors';

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: '8px',
          padding: '18px',
          boxShadow: 'none',
          borderRadius: '8px',
          border: 'var(--popover-border);',
          backgroundColor: 'var(--bg-color)',
        },},},},});

export default function UserLogo () {
  const width = useWindowWidth();
  const avatarSize = width < 768 ? '34px' : '44px';
  const userColor = width < 1440 ? 'inherit' : '#23262a';
  const user = useSelector(getUser);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => { setAnchorEl(event.currentTarget); };
  const handleClose = () => {setAnchorEl(null);};

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  console.log(user)

  return (
    <>
      <UserWrap onClick={handleClick}>
        {user?.avatarURL ? (
          <Avatar>
            <AvatarImg
              src={user.avatarURL}
              alt="User avatar"
              width={avatarSize}
              height={avatarSize}
            />
          </Avatar>
        ) : (
          <Avatar>
            <Letter>{user?.name?.slice()[0]}</Letter>
            </Avatar>
            
        )}

        <UserName>{user.name}</UserName>
      </UserWrap>

      <ThemeProvider theme={theme}>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <PopoverMenu />
        </Popover>
      </ThemeProvider>
    </>
  );
}
