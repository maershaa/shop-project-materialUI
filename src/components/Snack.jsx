import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const Snack = ({ isOpen, handleClose = Function.prototype }) => {
  return (
    <>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message="-"
      >
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Item added to cart successfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default Snack;
