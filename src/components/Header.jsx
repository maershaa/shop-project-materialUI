import React from 'react'
import {AppBar, ToolBar} from '@material-ui/core';
import { ShoppingBasket } from '@mui/icons-material';
const Header = () => {
  return (
    <AppBar>
        <ToolBar>
        <Typography variant="h6" className={classes.title}>
            Shop
          </Typography>
          <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <ShoppingBasket />
            </IconButton>
        </ToolBar>
    </AppBar>
  )
}

export default Header