function registerSW() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    if (registration) {
                        console.log('Service worker ready! Scope: ', registration.scope);
                        // Check if there's an active service worker
                        if (registration.active) {
                            registration.update().then(() => {
                                console.log('Service Worker updated successfully');
                            }).catch((error) => {
                                console.log('Service Worker update failed: ', error);
                            });
                        } else {
                            console.log('No active service worker to update');
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