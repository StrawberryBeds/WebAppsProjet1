import { useState, useEffect } from 'react';
import './AlerteListe.css';
import { NavLink } from 'react-router-dom';
import { isWithin } from '../utils/datefns'; // Adjust the import path as necessary

function AlerteListe({ searchQuery, data, startDate, endDate }) {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    console.log("Data received:", data);
    if (data && data.result && data.result.records) {
      const records = data.result.records;

      const filtered = records.filter((item) => {
        // Check if the item matches the search query (if any)
        const matchesSearchQuery = searchQuery ?
          item.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.type.toLowerCase().includes(searchQuery.toLowerCase()) :
          true;

const itemStartDate = item.date_debut.split('T')[0]; // Extract the date part
        const itemEndDate = item.date_fin.split('T')[0]; // Extract the date part
        const matchesDateRange = startDate && endDate ?
          isWithin(itemStartDate, startDate, endDate) || isWithin(itemEndDate, startDate, endDate) :
          true;

        return matchesSearchQuery && matchesDateRange;
      });

      setFilteredItems(filtered);
      console.log('Number of filtered items:', filtered.length); 
    } else {
      setFilteredItems([]);
    }

    console.log("Filtered items:", filteredItems);
  }, [searchQuery, data, startDate, endDate]);

  return (
    <div className="aside-grid-container">
      <div className="alertes-container">
        {filteredItems && filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className="alerte" key={item._id}>
              <NavLink to={`/alerte/${item._id}`} className="nav-link">
                <div>
                  <h3>{item.titre}</h3>
                  Afficher l'alerte
                </div>
              </NavLink>
            </div>
          ))
        ) : (
          <p>Rien à afficher</p>
        )}
      </div>
      <aside className="aside">
        <h3>S'abonner aux alertes</h3>
      </aside>
    </div>
  );
}

export default AlerteListe;
