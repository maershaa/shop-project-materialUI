import React from 'react';
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BasketItem from './BasketItem';

const Basket = (props) => {
  const {
    cartOpen,
    closeCart = Function.prototype,
    order = [],
    removeFromOrder,
  } = props;

  return (
    <>
      {/* <Button 
    onClick={toggleDrawer(true)}>
        Open drawer
        </Button> */}

      <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
        <List sx={{ width: '400px' }}>
          <ListItem>
            <ListItemIcon>
              <ShoppingBasketIcon />
            </ListItemIcon>
            <ListItemText primary="Корзина" />
          </ListItem>
          <Divider /> {/* разделительная полосочка */}
          {!order.length ? (
            <ListItem>Корзина пуста!</ListItem>
          ) : (
            <>
              {order.map((item) => (
                <BasketItem
                  key={item.name}
                  removeFromOrder={removeFromOrder}
                  {...item}
                />
              ))}
              <Divider /> {/* разделительная полосочка */}
              <ListItem>
                <Typography
                  variant="body1"
                  component="p"
                  color="initial"
                  sx={{ fontWeight: 700 }}
                >
                  Общая стоимость:{' '}
                  {order.reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                  }, 0)}{' '}
                  грн.
                </Typography>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Basket;
