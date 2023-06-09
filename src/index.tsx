import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SearchProvider from './provider/SearchProvider';
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <SearchProvider>
        <App />
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
        />
      </SearchProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
