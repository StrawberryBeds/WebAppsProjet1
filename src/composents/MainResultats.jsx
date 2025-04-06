import { useState, useEffect } from 'react';

import sample_data from './../assets/sample_data';

function MainResultats() {
    const [items, setItems] = useState([]);

    useEffect(() => {
            setItems(sample_data.features);
    }, []);

    return (
        <>
            <div>
                {items.map((feature) => (
                    <div key={feature.properties.titre}>
                        <h3>{feature.properties.titre}</h3>
                        {/* <p>Start Date: {new Date(feature.properties.date_debut).toLocaleString()}</p> */}
                        {/* <p>End Date: {new Date(feature.properties.date_fin).toLocaleString()}</p> */}
                        {/* <p>Type: {feature.properties.type}</p> */}
                        {/* <p>Publisher: {feature.properties.service_publieur}</p> */}
                        <a href={feature.properties.lien} target="_blank" rel="noopener noreferrer">
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MainResultats;

// const filteredData = sampleData.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

// path.join(__dirname, "tasks.json");

// Charger les tâches depuis le fichier JSON
// const loadData = () => {
//     try {
//         const sampleData = fs.readFileSync(DATA_FILE, 'utf8');
//         return JSON.parse(alertes);
//     } catch (err) {
//         console.error("Error loading tasks:", err);
//         return [];
//     }
// };

// const alertesList = alertes.map(alerte)




// const filteredData = sample_data.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
// );

{/* <div className="search-results">
{filteredData.map(alerte => (
  <div key={alerte.id} className="search-result-item">
    <h2>{alerte.name}</h2>
    </div>
))}
</div> */}

