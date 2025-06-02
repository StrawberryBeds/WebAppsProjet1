// FilterDates.js
import React from 'react';
import './Filters.css';
import { useState } from 'react';
// import ClearFilters from './ClearFilters';

function FilterDates({ onSelectDates }) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onSelectDates(startDate, endDate);
    }

    return (
        <form className='filters' action="" onSubmit={handleSubmit}>
            <label className='filter filter--date'>
                <b className='lbl'>De:</b> <input type="date" name="date_debut" id="date_debut" onChange={(e) => setStartDate(e.target.value)} value={startDate} />
            </label>
            <label className='filter filter--date'>
                <b className='lbl'>À:</b> <input type="date" name="date_fin" id="date_fin" onChange={(e) => setEndDate(e.target.value)} value={endDate} />
            </label>
            <button className='btn-filter' type='submit'>Filtrer</button>
        </form>
    );
}

export default FilterDates;
