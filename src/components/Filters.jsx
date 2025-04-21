import React from 'react';
import FilterArrondissement from '../components/FilterArrondissement'
import FilterSubject from '../components/FilterSubject'
import './Filters.css'; // Import your CSS file for styling



function Filters({ filters, onFilterChange }) {
    return (
        <div className="filters">
            <FilterArrondissement />
            <FilterSubject />
        </div>
    )
}

export default Filters;