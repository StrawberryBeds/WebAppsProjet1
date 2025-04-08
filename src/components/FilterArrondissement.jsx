import { useState, useEffect } from 'react';

function FilterArrondissement({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
          setDebouncedQuery(searchQuery);
        }, 300); // Adjust the debounce delay as needed
    
        return () => clearTimeout(timer);
      }, [searchQuery]);
    
      // Call onSearch when debouncedQuery changes
      useEffect(() => {
        if (debouncedQuery !== '') {
          onSearch(debouncedQuery);
        }
      }, [debouncedQuery, onSearch]);

      const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchQuery);
      };

    return (
                <div className="search-form">
                    <div className="pb-2">
                        <h1 className="search-form-title">Avis et alertes</h1>
                        <div className="search-form-purpose">Trouver un avis</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                            <div className="form-input-group">
                                <input type="text"
                                    className="form-control"
                                    id="search-input"
                                    data-query="q"
                                    placeholder="Que cherchez-vous?"
                                    aria-label="Recherche"
                                    value={searchQuery}
                                    onChange={handleInputChange}>
                                </input>
                                <span className="icon icon-search" aria-hidden="true"></span>
                            </div>
                    </form>
                </div>
    );
}

export default FilterArrondissement();
