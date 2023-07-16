import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Popover } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Avatar, AvatarImg, UserName, UserWrap } from './UserLogo.styled';
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
          border: '1px solid var(--accent)',
          backgroundColor: 'var(--bg-color)',
        },},},},});

export default function UserLogo () {
  const width = useWindowWidth();
  const avatarSize = width < 768 ? '34px' : '44px';
  const user = useSelector(getUser);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => { setAnchorEl(event.currentTarget); };
  const handleClose = () => {setAnchorEl(null);};

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  return (
      <>
        <UserWrap onClick={handleClick}>
          <Avatar>
            <AvatarImg
              src={!user.avatarURL ? "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" : user.avatarURL}
              alt="User avatar"
              width={avatarSize}
              height={avatarSize}
            />
          </Avatar>
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
