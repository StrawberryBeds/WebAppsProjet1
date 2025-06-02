import React from 'react';
import FilterArrondissement from '../components/FilterArrondissement'
import FilterSubject from '../components/FilterSubject'
import FilterDates from '../components/FilterDates'
import ClearFilters from '../components/ClearFilters'
import './Filters.css'; // Import your CSS file for styling
import ClearFilters from './ClearFilters';



function Filters({ filters, onFilterChange }) {
    return (
        <div>
            <div className="filters">
                <FilterArrondissement />
                <FilterSubject />
                <FilterDates />
                <ClearFilters />
            </div>
            <ClearButton onClear={handleClear} />
        </div>
    );
}

export default Filters;