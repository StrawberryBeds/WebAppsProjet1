// src/sw.js
const CACHE_VERSION = 'v2';
const CACHE_NAME = `WebAppsProject1-cache-${CACHE_VERSION}`;
const STATIC_CACHE = `WebAppsProject1-static-${CACHE_VERSION}`;

// Assets to cache - Vite-specific paths
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/index-i-llb7BG.css',  // Vite's default CSS output path
    '/assets/index-BTnlrKcu.js',   // Vite's default JS output path
    '/manifest.json',
    '/vite.svg',
    // Add any other static assets your app needs
];

// Install event - cache static assets
self.addEventListener('install', event => {
    event.waitUntil(
        Promise.all([
            caches.open(STATIC_CACHE).then(cache => {
                return cache.addAll(urlsToCache);
            }),
            self.skipWaiting()
        ])
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name.startsWith('WebAppsProject1-'))
                    .filter(name => name !== STATIC_CACHE && name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - implement cache-first with network fallback
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                // Return cached response if found
                if (cachedResponse) {
                    return cachedResponse;
                }

                // If not in cache, fetch from network
                return fetch(event.request)
                    .then(response => {
                        // Don't cache non-200 responses
                        if (!response.ok) return response;

                        // Clone the response as it can only be used once
                        const responseToCache = response.clone();

                        // Cache the successful response
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, responseToCache));

                        return response;
                    })
                    .catch(error => {
                        console.error('Fetch failed:', error);
                        // Return offline page or fallback response if needed
                        return new Response('Offline', {
                            status: 503,
                            statusText: 'Service Unavailable',
                            headers: new Headers({
                                'Content-Type': 'text/plain'
                            })
                        });
                    });
            })
    );
}); 