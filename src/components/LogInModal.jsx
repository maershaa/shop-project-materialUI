import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const LogInModal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby={'form - dialog - title'}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle id={'form - dialog - title'}>Log In</DialogTitle>

      <DialogContent>
        <DialogContentText
          sx={{
            m: 1,
          }}
        >
          Log in to access book purchases
        </DialogContentText>
        <TextField
          autoFocus
          sx={{
            m: 1,
            input: {
              color: 'rgb(0, 0, 0)', // Задает цвет текста
            },
          }}
          id={'name'}
          label={'Email Adress'}
          type={'email'}
          fullWidth
        ></TextField>

        <TextField
          autoFocus
          sx={{
            m: 1,
            input: {
              color: 'rgb(0, 0, 0)', // Задает цвет текста
            },
          }}
          id={'password'}
          label={'Password'}
          type={'password'}
          fullWidth
        ></TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {' '}
          Cancel{' '}
        </Button>
        <Button onClick={handleClose} color="primary">
          {' '}
          Log in{' '}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogInModal;
