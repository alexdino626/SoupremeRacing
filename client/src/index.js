import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});





const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
root.render(
  <React.StrictMode>
        <Auth0Provider
                domain = {domain}
                clientId = {clientId}
                redirectUri = {"http://localhost:3000"}
        >
          <App />
        </Auth0Provider>
  </React.StrictMode>
);

