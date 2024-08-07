import { useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import Basket from './Basket';
import GoodsList from './GoodsList';
import Search from './Search';
import Header from './Header.jsx';
import Snack from './Snack';
import Footer from './Footer';
import { goods } from '../data/goods';

import Hero from './Hero';

const App = () => {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(goods);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSnackOpen, setSnackOpen] = useState(false);

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch('');
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        })
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }
    setSnackOpen(true);
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  return (
    <>
      {/* Шапка сайта, принимает функцию обработчик для открытия корзины */}
      <Header handleCart={() => setCartOpen(true)} orderLen={order.length} />
      <Hero /> {/* !!!!!!добавить потом обработчик для кнопки */}
      {/* Контейнер для размещения содержимого */}
      <Container sx={{ mt: '1rem' }}>
        {/* Поле поиска, принимает значение поиска и функцию для изменения этого значения */}
        <Search value={search} onChange={handleChange} />

        {/* Список товаров, принимает список товаров и функцию для добавления в корзину */}
        <GoodsList goods={products} setOrder={addToOrder} />

        <Footer />
      </Container>
      {/* Компонент корзины, принимает состояние открытости корзины и функцию для закрытия корзины */}
      <Basket
        order={order}
        removeFromOrder={removeFromOrder}
        cartOpen={isCartOpen}
        closeCart={() => setCartOpen(false)}
      />
      <Snack isOpen={isSnackOpen} handleClose={() => setSnackOpen(false)} />
    </>
  );
};

export default App;
