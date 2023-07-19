import React, { useState } from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import SuccessIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';

export default function Notification({ text, setShowNotific, severity }) {
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
    setShowNotific(false);
  };

  const getIcon = () => {
    switch (severity) {
      case 'error':
        return <ErrorIcon />;
      case 'success':
        return <SuccessIcon />;
      case 'info':
        return <InfoIcon />;
      case 'warning':
        return <WarningIcon />;
      default:
        return null;
    }
  };

  const getBorderStyle = () => {
    switch (severity) {
      case 'error':
        return '1px solid red';
      case 'success':
        return '1px solid green';
      case 'info':
        return '1px solid cornflowerblue';
      case 'warning':
        return '1px solid orange';
      default:
        return '1px solid black';
    }
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
          icon={getIcon()}
          severity={severity}
          sx={{
            marginTop: '50px',
            border: getBorderStyle(),
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
