import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className='nav'>
            <ul className='bare-list nav-list'>
                <li className='nav-item'>
                    {/* <NavLink className={'nav-link'} to="/">Accueil</NavLink> */}
                    <NavLink className={'nav-link'} to="/alerte">Alerte</NavLink>
                </li>
            </ul>
        </nav>
    )
}

function AlerteListe({ searchQuery, data }) {
    const [filteredItems, setFilteredItems] = useState(data?.features || []);

    useEffect(() => {
        if (searchQuery) {
          const filtered = data.features.filter((feature) =>
            feature.properties.titre.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setFilteredItems(filtered);
        } else {
          setFilteredItems(data.features);
        }
      }, [searchQuery, data]);

    return (
            <div>
                {filteredItems.length > 0 ? ( 
                filteredItems.map((feature) => (
                    <div key={feature.properties.titre}>
                        <h3>{feature.properties.titre}</h3>
                        {/* <p>Start Date: {new Date(feature.properties.date_debut).toLocaleString()}</p> */}
                        {/* <p>End Date: {new Date(feature.properties.date_fin).toLocaleString()}</p> */}
                        {/* <p>Type: {feature.properties.type}</p> */}
                        {/* <p>Publisher: {feature.properties.service_publieur}</p> */}
                        <NavLink
                        to={`/alerte/${encodeURIComponent(feature.properties.titre)}-${feature.properties.date_debut}`}
                        className="nav-link" 
                        >Afficher l'alerte
                        </NavLink>
                        {/* <a href={feature.properties.lien} target="_blank" rel="noopener noreferrer"> {feature.properties.lien}
                        </a> */}
                    </div>
                ))
              ) : (
                <p>Rien à afficher</p>
              )}
            </div>
    );
}

export default AlerteListe;
