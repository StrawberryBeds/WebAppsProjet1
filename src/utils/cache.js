export function getFromCache(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error(`Error retrieving data from cache for key ${key}:`, error);
        return null;
    }
}

export function saveInCache(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error(`Error saving data to cache for key ${key}:`, error);
    }
}

export function removeFromCache(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing data from cache for key ${key}:`, error);
    }
}

export function clearCache() {
    try {
        localStorage.clear();
    } catch (error) {
        console.error('Error clearing cache:', error);
    }
}
