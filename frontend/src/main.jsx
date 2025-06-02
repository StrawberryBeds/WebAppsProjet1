import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Check if service workers are supported
function registerSW() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    if (registration) {
                        console.log('Service worker ready! Scope: ', registration.scope);
                        // Check if there's an existing service worker and update it
                        if (registration.installing || registration.waiting || registration.active) {
                            registration.update().catch((error) => {
                                console.log('Service Worker update failed: ', error);
                            });
                        }
                    } else {
                        console.log('Service Worker registration returned null');
                    }
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
