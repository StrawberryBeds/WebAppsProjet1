import { useState } from 'react'

function Main() {

    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <div class="container position-relative">
                <div class="row document-heading-header">
                    <div class="col-12 col-lg-7 align-self-center">
                        <div class="pb-2">
                            <h1 class="header-full-width-title">Avis et alertes</h1>
                            <div class="document-heading-subtitle rm-last-child-mb">Trouver un avis</div>
                        </div>
                        <div class="form-group form-group-lg">
                            <div class="input-group-icon input-group-icon-left">
                                <input type="text"
                                    class="form-control input-rounded get-query"
                                    id="search-input"
                                    data-query="q"
                                    placeholder="Que cherchez-vous?"
                                    aria-label="Recherche"
                                    value={searchQuery}
                                    onChange={handleInputChange}>
                                </input>

                                <span class="icon icon-search" aria-hidden="true"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Main;