// src/sw.js
import { precacheAndRoute } from 'workbox-precaching';

// This line is necessary for the manifest injection
self.__WB_MANIFEST = []; // Placeholder for the manifest injection

// Precaching the assets
precacheAndRoute(self.__WB_MANIFEST);
