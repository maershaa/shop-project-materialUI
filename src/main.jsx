import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary:{
      main:'#9db35a'
    },
    secondary:{
      main:'#b35aa3'
    },
    text: {
      primary: '#ffffff', // Цвет текста
    },
  }
  
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="react-vite-builder">
    <ThemeProvider theme={theme}>  {/* кастомизация Material UI */}

    <App />
      </ThemeProvider> 
    </BrowserRouter>
  </React.StrictMode>,
);
