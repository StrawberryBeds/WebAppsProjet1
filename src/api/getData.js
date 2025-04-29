import { saveInCache } from './../utils/cache';

const BASE_URL = 'https://donnees.montreal.ca/api/3/action/datastore_search';
const RESOURCE_ID = 'fc6e5f85-7eba-451c-8243-bdf35c2ab336';

async function getData(limit = 20) {
    const url = `https://donnees.montreal.ca/api/3/action/datastore_search?resource_id=fc6e5f85-7eba-451c-8243-bdf35c2ab336`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        saveInCache('data', json.result.records);

        return json.result;
    } catch (error) {
        console.error(error);
    }
}

export default getData