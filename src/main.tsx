import './styles/reset.css';
import './styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary, ErrorFallback } from 'components/utils';
import { Provider } from 'react-redux';
import store from '@/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  </Provider>,
);
