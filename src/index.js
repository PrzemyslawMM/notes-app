import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './font.css';

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
