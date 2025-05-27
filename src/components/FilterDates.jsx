import React from 'react';
import './Filters.css'; // Import your CSS file for styling
import { useState } from 'react';

function FilterDates({postSubmit}) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        postSubmit(startDate, endDate);
    }

    return (
        <form className='filters' action="" onSubmit={handleSubmit}>
            <label className='filter filter--date'>
                <b className='lbl'>De:</b> <input type="date" name="date_debut" id="date_debut" onChange={(e) => setStartDate(e.target.value)} value={date_debut} />
            </label>
            <label className='filter filter--date'>
                <b className='lbl'>À:</b> <input type="date" name="date_fin" id="date_fin" onChange={(e) => setEndDate(e.target.value)} value={date_fin} />
            </label>
            <button className='btn-filter' type='submit'>Filtrer</button>
        </form>
    )

}

export default FilterDates;