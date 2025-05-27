import { useState } from 'react';
import Search from '../components/Search';
import AlerteListe from '../components/AlerteListe';
import FilterArrondissement from '../components/FilterArrondissement';
import FilterSubject from '../components/FilterSubject';
import FilterDates from '../components/FilterDates';

function AlertesEtAvis({ apiData }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleSelectSubject = (type) => {
        setSearchQuery(type);
    };

    const handleSelectArrondissement = (name) => {
        setSearchQuery(name);
    };

    // const handleSelectDates = (startDate, endDate) =>
    //     setSearchQuery(startDate, endDate)

    return (
        <>
            <Search onSearch={handleSearch} />
            <FilterSubject onSelectSubject={handleSelectSubject} />
            <FilterArrondissement onSelectArrondissement={handleSelectArrondissement} />
            {/* <FilterDates onSelectDates={handleSelectDates} /> */}
            {apiData && <AlerteListe searchQuery={searchQuery} data={apiData} />}
        </>
    );
}

export default AlertesEtAvis;
