import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const DOMAIN = process.env.REACT_APP_ECOMMERECE_AUTH0_DOMAIN;
const CLIENTID = process.env.REACT_APP_ECOMMERECE_AUTH0_CLIENTID;

ReactDOM.render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENTID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
