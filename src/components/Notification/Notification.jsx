import React, { useState } from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

export default function Notification({ text }) {
  const [state, setState] = useState({
    open: true,
    vertical: 'top',
    horizontal: 'right',
    Transition: Slide,
  });
  const { vertical, horizontal, open, Transition } = state;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
  };

  return (
    <>
      <Snackbar
        onClose={handleClose}
        sx={{
          maxWidth: '432px',
        }}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={4000}
        TransitionComponent={Transition}
      >
        <Alert
          onClose={handleClose}
          icon={<ErrorIcon />}
          severity={'error'}
          sx={{
            marginTop: '50px',
            border: '1px solid red',
            borderRadius: '8px',
            padding: '15px',
            fontFamily: 'inherit',
            display: 'flex',
            alignItems: 'center',
            '& .MuiAlert-icon': {
              padding: '0',
            },
            '& .MuiAlert-message': {
              padding: '0',
            },
            '& .MuiAlert-action': {
              padding: '0',
            },
          }}
        >
          {text}
        </Alert>
      </Snackbar>
    </>
  );
}
