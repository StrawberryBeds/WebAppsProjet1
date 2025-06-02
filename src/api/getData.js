import React, { useEffect, useState } from 'react';

const GetData = ({ setApiData }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'https://donnees.montreal.ca/api/3/action/datastore_search?resource_id=fc6e5f85-7eba-451c-8243-bdf35c2ab336';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setApiData(data); // Pass data to the parent component
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [setApiData]);

    // if (loading) {
    //     return <div>Chargement...</div>;
    // }

    // if (error) {
    //     return <div>Erreur : {error.message}</div>;
    // }

    // return null; // Return null since we're only using this component to fetch data
};

export default GetData;
