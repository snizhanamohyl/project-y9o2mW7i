import React, { useState } from 'react';
import { Popover, Typography } from '@mui/material';
import { Avatar, AvatarImg, UserName, UserWrap } from './UserLogo.styled';

export const UserLogo = () => {
      const [anchorEl, setAnchorEl] = useState(null);

      const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
  const avatarSize = window.innerWidth < 768 ? '34px' : '44px';

    
    return (
      <>
        <UserWrap onClick={handleClick}>
          <Avatar>
            <AvatarImg
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
              alt="Olena"
              width={avatarSize}
              height={avatarSize}
            />
          </Avatar>
          <UserName>Olena</UserName>
        </UserWrap>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div style={{ padding: '10px' }}>
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                    <button type='button'>Button</button>

            {/* <Link href="https://example.com">Go to Example</Link>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: '10px' }}
            >
              Submit
            </Button> */}
          </div>
        </Popover>
      </>
    );
}
