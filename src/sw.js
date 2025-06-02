// src/sw.js
import { precacheAndRoute } from 'workbox-precaching';

self.__WB_MANIFEST; // This line is necessary for the manifest injection

precacheAndRoute(self.__WB_MANIFEST);
