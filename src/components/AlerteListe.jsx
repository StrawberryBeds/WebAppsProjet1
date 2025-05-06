import { useState, useEffect } from 'react';
import './AlerteListe.css';
import { NavLink } from 'react-router-dom';

function AlerteListe({ searchQuery, data }) {
  const [filteredItems, setFilteredItems] = useState([]); // Default to an empty array

  useEffect(() => {
    console.log("Data received:", data);
    if (data && data.result && data.result.records) {
      const records = data.result.records;
      if (searchQuery) {
        const filtered = records.filter((item) =>
          item.titre.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredItems(filtered);
      } else {
        setFilteredItems(records);
      }
    } else {
      setFilteredItems([]);
    }
    console.log("Filtered items:", filteredItems);
  }, [searchQuery, data]);

  return (
    <div className="alertes-container">
      {filteredItems && filteredItems.length > 0 ? ( // Check if filteredItems is defined
        filteredItems.map((item) => (
          <div className="alerte" key={item._id}>
            <NavLink to={`/alerte/${item._id}`} className="nav-link">
              <div>
                <h3>{item.titre}</h3>
                Afficher l'alerte
              </div>
            </NavLink>
            {/* <NavLink to={String(item.lien)} target="_blank" rel="noopener noreferrer">
              {item.lien}
            </NavLink> */}
          </div>
        ))
      ) : (
        <p>Rien à afficher</p>
      )}
    </div>
  );
}

export default AlerteListe;
