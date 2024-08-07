import { ListItem, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BasketItem = ({ id, removeFromOrder, name, price, quantity }) => {
  return (
    <ListItem>
      <Typography variant="body1" component="p" color="initial">
        {name} {price} грн x{quantity}
      </Typography>
      <IconButton
        className="btn btn-primary"
        onClick={() => removeFromOrder(id)}
      >
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
