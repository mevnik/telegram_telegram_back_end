import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import TelegramRoutes from './Routes/telegram_routes.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <TelegramRoutes/>

    </BrowserRouter>

  </React.StrictMode>
);

