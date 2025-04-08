import React from 'react';
import './FilterStyle.css'; // Import your CSS file for styling

function FilterSubject({ onSelectSubject }) {
  const subjects = [
    { id: 1, type: 'Circulation et transport' },
    { id: 2, type: 'Complexes sportifs' },
    { id: 3, type: 'Déchets et recyclage' },
    { id: 4, type: 'Déneigement' },
    { id: 5, type: 'Eau et aqueduc' },
    { id: 6, type: 'Séances publiques' },
    { id: 7, type: 'Stationnement' },
    { id: 8, type: 'Urgence' }
  ];

  const handleClick = (type) => {
    onSelectSubject(type);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">Sujet</button>
      <div className="dropdown-content">
        {subjects.map((subject) => (
          <a
            key={subject.id}
            href="#"
            onClick={() => handleClick(subject.type)}
          >
            {subject.type}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FilterSubject;
