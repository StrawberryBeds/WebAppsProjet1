import React from 'react';
import './FilterStyle.css'; // Import your CSS file for styling

function FilterArrondissements({ onSelectArrondissement }) {
  const arrondissements = [
    { id: 1, name: 'Ahuntsic-Cartierville' },
    { id: 2, name: 'Anjou' },
    { id: 3, name: 'Côte-des-Neiges–Notre-Dame-de-Grâce' },
    { id: 4, name: 'Lachine' },
    { id: 5, name: 'LaSalle' },
    { id: 6, name: 'Le Plateau-Mont-Royal' },
    { id: 7, name: 'Le Sud-Ouest' },
    { id: 8, name: 'L’Île-Bizard–Sainte-Geneviève' },
    { id: 9, name: 'Mercier–Hochelaga-Maisonneuve' },
    { id: 10, name: 'Montréal-Nord' },
    { id: 11, name: 'Outremont' },
    { id: 12, name: 'Pierrefonds-Roxboro' },
    { id: 13, name: 'Rivière-des-Prairies–Pointe-aux-Trembles' },
    { id: 14, name: 'Rosemont–La Petite-Patrie' },
    { id: 15, name: 'Saint-Laurent' },
    { id: 16, name: 'Saint-Léonard' },
    { id: 17, name: 'Verdun' },
    { id: 18, name: 'Ville-Marie' },
    { id: 19, name: 'Villeray–Saint-Michel–Parc-Extension' },
  ];

  const handleClick = (name) => {
    onSelectArrondissement(name);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">Arrondissements</button>
      <div className="dropdown-content">
        {arrondissements.map((arrondissement) => (
          <a
            key={arrondissement.id}
            href="#"
            onClick={() => handleClick(arrondissement.name)}
          >
            {arrondissement.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FilterArrondissements;
