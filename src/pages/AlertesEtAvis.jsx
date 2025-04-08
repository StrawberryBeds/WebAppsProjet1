import { useState } from 'react'

import Search from '../components/Search'
import AlerteListe from './../components/AlerteListe'
import modified_sample_data from './../assets/modified_sample_data.json'
import FilterArrondissement from '../components/FilterArrondissement'
// import FilterSubject from '../components/FilterSubject'

function AlertesEtAvis() {

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

    return (
        <>
            <Search onSearch={handleSearch}/>
            {/* <FilterSubject onSelectSubject={handleSelectSubject}/> */}
            <FilterArrondissement onSelectArrondissement={handleSelectArrondissement}/>
            {/* <FilterArrondissement onSearch={handleSearch}/> */}
            <AlerteListe searchQuery={searchQuery} data={modified_sample_data}/>
        </>
    );
}

export default AlertesEtAvis;