// Import necessary Workbox modules
import { precacheAndRoute } from 'workbox-precaching';

// This line is necessary for the manifest injection
self.__WB_MANIFEST;

// Precaching the assets
precacheAndRoute(self.__WB_MANIFEST);
