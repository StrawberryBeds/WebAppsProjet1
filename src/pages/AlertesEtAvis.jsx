import { useState } from 'react'

import Search from '../components/Search'
import AlerteListe from './../components/AlerteListe'
import sample_data from './../assets/sample_data.json'

function AlertesEtAvis() {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
      };

    return (
        <>
            <Search onSearch={handleSearch}/>
            <AlerteListe searchQuery={searchQuery} data={sample_data}/>
        </>
    );
}

export default AlertesEtAvis;