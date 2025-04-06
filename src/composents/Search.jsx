import { useState } from 'react'

function Search() {

    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <div className="container position-relative">
                <div className="row document-heading-header">
                    <div class="col-12 col-lg-7 align-self-center">
                        <div className="pb-2">
                            <h1 className="header-full-width-title">Avis et alertes</h1>
                            <div className="document-heading-subtitle rm-last-child-mb">Trouver un avis</div>
                        </div>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;

            {/* <div className="search-results">
                {filteredData.map(item => (
                    <div key={item.id} className="search-result-item">
                        <h2>{item.titre}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div> */}