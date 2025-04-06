import { useState, useEffect } from 'react'

function Search({ onSearch }) {
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
        onSearch(searchQuery); // Fallback to submit behavior
      };

    return (
        <div className="container position-relative">
            <div className="row document-heading-header">
                <div className="col-12 col-lg-7 align-self-center">
                    <div className="pb-2">
                        <h1 className="header-full-width-title">Avis et alertes</h1>
                        <div className="document-heading-subtitle rm-last-child-mb">Trouver un avis</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group form-group-lg">
                            <div className="input-group-icon input-group-icon-left">
                                <input type="text"
                                    className="form-control input-rounded get-query"
                                    id="search-input"
                                    data-query="q"
                                    placeholder="Que cherchez-vous?"
                                    aria-label="Recherche"
                                    value={searchQuery}
                                    onChange={handleInputChange}>
                                </input>
                                <span className="icon icon-search" aria-hidden="true"></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    );
}

export default Search;
