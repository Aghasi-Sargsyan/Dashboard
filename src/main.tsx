import './styles/reset.css';
import './styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary, ErrorFallback } from 'components/utils';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <BrowserRouter>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </HelmetProvider>,
);
