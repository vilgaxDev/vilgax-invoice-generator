import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './scss/main.scss';
import * as serviceWorker from './serviceWorker';
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);

serviceWorker.register();