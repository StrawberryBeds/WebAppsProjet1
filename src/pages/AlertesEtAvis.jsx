// AlertesEtAvis.js
import { useState } from 'react';
import Search from '../components/Search';
import AlerteListe from '../components/AlerteListe';
import FilterArrondissement from '../components/FilterArrondissement';
import FilterSubject from '../components/FilterSubject';
import FilterDates from '../components/FilterDates';
import ClearFilters from '../components/ClearFilters';

function AlertesEtAvis({ apiData }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleSelectSubject = (type) => {
        setSearchQuery(type);
    };

    const handleSelectArrondissement = (name) => {
        setSearchQuery(name);
    };

    const handleSelectDates = (startDate, endDate) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const handleClear = () => {
        setSearchQuery('');
        setSelectedArrondissement('');
        setSelectedSubject('');
        setDates({ startDate: '', endDate: '' });
    };

    return (
        <div>
            <div>
                <Search onSearch={handleSearch} />
                <FilterSubject onSelectSubject={handleSelectSubject} />
                <FilterArrondissement onSelectArrondissement={handleSelectArrondissement} />
                <FilterDates onSelectDates={handleSelectDates} />
                            <ClearFilters onClear={handleClear} />
                {apiData && <AlerteListe searchQuery={searchQuery} data={apiData} startDate={startDate} endDate={endDate} />}
            </div>
        </div>
    );
}

export default AlertesEtAvis;
