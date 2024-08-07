import React, { useState } from 'react';
import LogInModal from './LogInModal';
import SignUpModal from './SignUpModal';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Container, Typography, Badge, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ handleCart, orderLen }) => {
  // Состояния для каждого модального окна
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  // Функции для управления состоянием LogInModal
  const handleLogInOpen = () => {
    setOpenLogIn(true);
  };

  const handleLogInClose = () => {
    setOpenLogIn(false);
  };

  // Функции для управления состоянием SignUpModal
  const handleSignUpOpen = () => {
    setOpenSignUp(true);
  };

  const handleSignUpClose = () => {
    setOpenSignUp(false);
  };

  return (
    <AppBar
      position="static" // в статическомположении панель остается на своем месте и не перемещается при прокрутке страницы
      sx={{ color: '#ffffff' }}
    >
      <Container>
        <Toolbar>
          {' '}
          {/* в Toolbar обычно кладуться  иконки, логотипы и кнопки для адаптивного меню */}
          <IconButton
            edge="start"
            aria-label="menu"
            color="inherit"
            sx={{ marginRight: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6" //задаем размер как у заголовка 6 типа
            component="span" //но при этом семантически он будет span
            color="inherit"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} //добавляем стили (они сокращениями пишутся)
          >
            BookShop
          </Typography>
          <Box>
            {' '}
            {/* //1=8px */}
            <Button
              onClick={handleLogInOpen}
              color="inherit"
              variant="outlined"
              sx={{ mr: 1 }}
            >
              LogIn
            </Button>
            <LogInModal open={openLogIn} handleClose={handleLogInClose} />
            <Button
              onClick={handleSignUpOpen}
              color="secondary"
              variant="contained"
            >
              SignUp
            </Button>
            <SignUpModal open={openSignUp} handleClose={handleSignUpClose} />
          </Box>
          <IconButton color="inherit" onClick={handleCart} sx={{ ml: 2 }}>
            <Badge badgeContent={orderLen} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
