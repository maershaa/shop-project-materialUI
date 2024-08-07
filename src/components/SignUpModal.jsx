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

const SignUpModal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
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
      <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            m: 1,
          }}
        >
          Registration
        </DialogContentText>
        <TextField
          autoFocus
          sx={{
            m: 1,
            input: {
              color: 'rgb(0, 0, 0)', // Задает цвет текста
            },
          }}
          id="name"
          label="Name"
          type="text"
          fullWidth
        />
        <TextField
          sx={{
            m: 1,
            input: {
              color: 'rgb(0, 0, 0)', // Задает цвет текста
            },
          }}
          id="email"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          sx={{
            m: 1,
            input: {
              color: 'rgb(0, 0, 0)', // Задает цвет текста
            },
          }}
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Sign up
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpModal;
