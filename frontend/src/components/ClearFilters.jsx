import React from 'react';

function ClearFilters({ onClear }) {
  return (
    <button onClick={onClear} className="clear-button">
      Clear All
    </button>
  );
}

export default ClearFilters;
