import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Check if service workers are supported
function registerSW() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('.frontend/src/sw.js')
                .then((registration) => {
                    console.log('Service worker ready! Scope: ', registration.scope);
                    registration.update();
                })
                .catch((error) => {
                    console.log('Service Worker registration failed: ', error);
                });
        });
    }
}

registerSW();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
