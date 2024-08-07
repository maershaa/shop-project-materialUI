import React from 'react';
import { Container, Paper, Typography, Grid, Button } from '@mui/material';

const Hero = () => {
  return (
    <Paper
      elevation={3}
      square={false}
      style={{
        backgroundImage:
          'url(https://huarache-shop.ru/800/600/https/pbs.twimg.com/media/DGTdLruUAAAQcm2.jpg',
      }}
      // url(https://source.unsplash.com/random'//рандомные картинки
      sx={{
        mb: '8px',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 300,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          background: 'rgba(0,0,0,0.3)',
          zIndex: 1, //чтобы затемнение картинки было над картинкой, но под текстом
        }}
      ></div>

      <Container sx={{ mt: '1rem' }}>
        <Grid container spacing={2}>
          <Grid item md={6} sx={{ mt: '25px' }}>
            <div>
              <Typography
                variant="h3"
                color="inherit"
                gutterBottom
                sx={{ zIndex: 2, position: 'relative' }}
              >
                Welcome to Our Library
              </Typography>
            </div>

            <Typography
              variant="body1"
              component="p"
              color="inherit"
              paragraph
              sx={{ zIndex: 2, position: 'relative' }}
            >
              Discover a world of knowledge and inspiration. Our library offers
              a wide selection of books, magazines, and electronic resources for
              all ages and interests.
            </Typography>

            <Button
              color="secondary"
              variant="contained"
              sx={{ zIndex: 2, position: 'relative' }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Hero;
