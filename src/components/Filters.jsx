import React from 'react';
import FilterArrondissement from '../components/FilterArrondissement'
import FilterSubject from '../components/FilterSubject'
// import FilterDates from '../components/FilterDates'
import './Filters.css'; // Import your CSS file for styling



function Filters({ filters, onFilterChange }) {
    return (
        <div className="filters">
            <FilterArrondissement />
            <FilterSubject />
            {/* <FilterDates /> */}
        </div>
    )
}

export default Filters;