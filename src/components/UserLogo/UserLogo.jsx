import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Popover } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Avatar, AvatarImg, UserName, UserWrap, Letter} from './UserLogo.styled';
import PopoverMenu from 'components/Popover/PopoverMenu ';
import useWindowWidth from "hooks/useWindowWidth";
import { getUser } from 'redux/auth/selectors';
import { useLocation } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: '8px',
          padding: '18px',
          boxShadow: 'none',
          borderRadius: '8px',
          border: '1px solid var(--accent-green)',
          backgroundColor: 'var(--bg-color)',
        },},},},});

export default function UserLogo() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const width = useWindowWidth();

  const { pathname } = useLocation();
  const isMainPage = pathname === '/';
  const isRecipePage = pathname.includes('/recipe/');

  const avatarSize = width < 768 ? '34px' : '44px';
  const userColor = width < 1440 ? 'inherit' : ((isMainPage || isRecipePage) ? '#23262a' : 'var(--text-color)');
  const user = useSelector(getUser);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setIsPopoverOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsPopoverOpen(false);
  };

  const id = isPopoverOpen ? 'simple-popover' : undefined;

  useEffect(() => {
    const html = document.querySelector("html");
    
    if (html) {
        html.style.overflow = isPopoverOpen ? "hidden" : "auto";
    }
  }, [isPopoverOpen]);

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

        <UserName $userColor={userColor}>{user.name}</UserName>
      </UserWrap>

      <ThemeProvider theme={theme}>
        <Popover
          id={id}
          open={isPopoverOpen}
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
