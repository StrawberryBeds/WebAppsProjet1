import { useState } from 'react'

import Search from '../components/Search'
import AlerteListe from './../components/AlerteListe'
import modified_sample_data from './../assets/modified_sample_data.json'

function AlertesEtAvis() {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
      };

    return (
        <>
            <Search onSearch={handleSearch}/>
            <AlerteListe searchQuery={searchQuery} data={modified_sample_data}/>
        </>
    );
}

export default AlertesEtAvis;