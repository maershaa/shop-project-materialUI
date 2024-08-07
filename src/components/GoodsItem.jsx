import React from 'react';
import Grid from '@mui/material/Grid';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

const GoodsItem = (props) => {
  const { name, price, setOrder, poster } = props;

  return (
    <Grid
      item
      xs={12} //На мобильных устройствах элемент занимает всю ширину, используя все 12 колонок сетки.
      sm={6} //На маленьких устройствах элемент занимает 6 из 12 колонок сетки, что составляет половину доступной ширины. (2 колонки)
      md={4} //На планшетах и настольных компьютерах элемент занимает 4 из 12 колонок сетки, что составляет треть доступной ширины. (3 колонки)
    >
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          title={name}
          image={poster}
          alt={name}
          height="140"
        />

        <CardContent>
          <Typography variant="h6" component="h3" color="initial">
            {name}
          </Typography>

          <Typography
            variant="body1" //текст будет отображаться с размером и стилем, соответствующими основному контенту страницы или раздела
            component="p"
            color="initial"
          >
            Цена: {price} грн.
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            variant="outlined"
            size="medium"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
