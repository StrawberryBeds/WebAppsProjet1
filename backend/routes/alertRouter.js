const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { updateCollection, getAlertById } = require('../db/alertCollection');

const API_URL = 'https://donnees.montreal.ca/api/3/action/datastore_search?resource_id=fc6e5f85-7eba-451c-8243-bdf35c2ab336';

router.get('/', async (req, res) => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            console.log("router.get", response.status)

        const data = await response.json();
        const records = data.result.records;

        const result = await updateCollection(records);
        // const { borough } = req.query

        // if (borough) {
        //     result = result.filter(alert => alert.borough === borough || alert.borough.includes(borough))
        // }

        res.status(200).json({ status: 'success', data: result, size: result.length });
    } catch (error) {
        console.error('Error fetching Montreal data:', error);
        res.status(500).json({ status: 'error', error: 'Failed to fetch data from Montreal API' });
    }
});

// router.get('/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const response = await getAlertById(id);
//         if (!response) {
//             res.status(404).json({ status: 'error', error: `No alerts found with the id: ${id}` })
//         }

//         res.status(200).json({ status: 'success', data: response });
//     } catch (error) {
//         console.error('Error fetching Montreal data:', error);
//         res.status(500).json({ status: 'error', error: 'Failed to retrieve data from Database' });
//     }
// })


module.exports = router;