import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
        <div className="footer-container">
            <div className="d-flex font-size-xs-interface pb-1 pb-md-2">
                <a href="#main-content" className="link-page-top ml-auto shell-scroll-trigger">Haut de page</a>
            </div>

            <div className="row">
                <div className="col-12 col-md-4 col-lg-2 top-separator">
                    <h3 className="list-heading text-white">Mon compte</h3>
                    <ul className="list-unstyled mb-4 mb-md-8">
                        <li><a href="/sujets/compte-pour-acceder-aux-services-de-la-ville">À propos de mon compte</a></li>
                        <li><a href="/avis-et-alertes">Avis et alertes</a></li>
                        <li><a href="/demarches/creer-un-compte">Créer mon compte</a></li>
                    </ul>
                </div>


                <div className="col-12 col-md-4 col-lg-2 top-separator">
                    <h3 className="list-heading text-white">Communiquer avec nous</h3>
                    <ul className="list-unstyled mb-4 mb-md-8">
                        <li><a href="/services/acces-linformation">Demande d'accès à l'information</a></li>
                        <li><a href="/nous-joindre">Nous joindre</a></li>
                        <li><a href="/signaler-un-probleme">Signaler un problème</a>
                        </li>
                    </ul>
                </div>


                <div className="col-12 col-md-4 col-lg-2 top-separator">
                    <h3 className="list-heading text-white">Travailler avec nous</h3>
                    <ul className="list-unstyled mb-4 mb-md-8"><li>
                        <a href="https://montreal.ca/services/appels-doffres-et-contrats">Appels d'offres</a></li>
                        <li><a href="/articles/offres-demploi-2944">Emplois</a></li>
                        <li><a href="http://ville.montreal.qc.ca/portal/page?_pageid=4657,89479628&amp;_dad=portal&amp;_schema=PORTAL">Fournisseurs</a></li>
                    </ul>
                </div>


                <div className="col-12 col-md-4 col-lg-2 top-separator">
                    <h3 className="list-heading text-white">Visiter Montréal</h3>
                    <ul className="list-unstyled mb-4 mb-md-8">
                        <li><a href="/lieux/hotel-de-ville">Hôtel de ville</a></li>
                        <li><a href="/services/mtlwifi-acces-gratuit-internet">MTLWiFi</a></li>
                        <li><a href="https://www.mtl.org/fr">Tourisme Montréal</a>
                        </li>
                    </ul>
                </div>


                <div className="col-12 col-md-4 col-lg-2 top-separator">
                    <h3 className="list-heading text-white">À propos de nous</h3>
                    <ul className="list-unstyled mb-4 mb-md-8">
                        <li><a href="https://ville.montreal.qc.ca/portal/page?_pageid=5798,43301618&amp;_dad=portal&amp;_schema=PORTAL">Avis publics</a></li>
                        <li><a href="/communiques-de-presse">Communiqués</a></li><li><a href="/sujets/ententes-de-partenariat-et-visibilite">Ententes de partenariat</a></li>
                        <li><a href="/services/recherche-de-reglements">Règlements</a></li><li><a href="/unites/salle-des-medias">Salle des médias</a></li>
                    </ul>
                </div>


                <div className="col-12 col-md-4 col-lg-2 top-separator">
                    <h3 className="list-heading text-white">Nous suivre</h3>
                    <ul className="list-unstyled list-social-media mb-4 mb-md-8">
                        <li><a href="https://www.facebook.com/mtlville"><span className="icon icon-social-facebook" aria-hidden="true"></span> Facebook</a></li>
                        <li><a href="https://www.instagram.com/mtl_ville/">< span className="icon icon-social-instagram" aria-hidden="true"></span> Instagram</a></li>
                        <li><a href="https://www.linkedin.com/company/ville-de-montr-al"><span className="icon icon-social-linkedin" aria-hidden="true"></span> LinkedIn</a></li>
                        <li><a href="https://twitter.com/mtl_ville"><span className="icon icon-social-x" aria-hidden="true"></span> X (Twitter)</a></li>
                        <li><a href="https://www.youtube.com/user/MTLVille"><span className="icon icon-social-youtube" aria-hidden="true"></span> YouTube</a></li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-12 list-toggle top-separator">
                    <h3 className="list-heading d-md-none text-white" role="button" aria-expanded="false" aria-controls="collapseArrondissements" data-collapse-arrondissements="true">Arrondissements</h3>
                    <h3 className="list-heading d-none d-md-block text-white"> Arrondissements</h3>
                    <div className="collapse" id="collapseArrondissements">
                        <ul className="list-unstyled list-4-columns-md mb-2 mb-md-8">
                            <li><a href="https://montreal.ca/ahuntsic-cartierville">Ahuntsic-Cartierville</a></li>
                            <li><a href="https://montreal.ca/anjou">Anjou</a></li><
                                li><a href="https://montreal.ca/cote-des-neiges-notre-dame-de-grace">Côte-des-Neiges–Notre-Dame-de-Grâce</a></li>
                            <li><a href="https://montreal.ca/lile-bizard-sainte-genevieve">L'Île-Bizard–Sainte-Geneviève</a></li>
                            <li><a href="https://montreal.ca/lachine">Lachine</a></li
                            ><li><a href="https://montreal.ca/lasalle">LaSalle</a></li>
                            <li><a href="https://montreal.ca/le-plateau-mont-royal">Le Plateau-Mont-Royal</a></li>
                            <li><a href="https://montreal.ca/le-sud-ouest">Le Sud-Ouest</a></li>
                            <li><a href="https://montreal.ca/mercier-hochelaga-maisonneuve">Mercier–Hochelaga-Maisonneuve</a></li><
                                li><a href="https://montreal.ca/montreal-nord">Montréal-Nord</a></li>
                            <li><a href="https://montreal.ca/outremont">Outremont</a></li>
                            <li><a href="https://montreal.ca/pierrefonds-roxboro">Pierrefonds-Roxboro</a></li>
                            <li><a href="https://montreal.ca/riviere-des-prairies-pointe-aux-trembles">Rivière-des-Prairies–Pointe-aux-Trembles</a></li>
                            <li><a href="https://montreal.ca/rosemont-la-petite-patrie">Rosemont–La Petite-Patrie</a></li>
                            <li><a href="https://montreal.ca/saint-laurent">Saint-Laurent</a></li>
                            <li><a href="https://montreal.ca/saint-leonard">Saint-Léonard</a></li>
                            <li><a href="https://montreal.ca/verdun">Verdun</a></li>
                            <li><a href="https://montreal.ca/ville-marie">Ville-Marie</a></li>
                            <li><a href="https://montreal.ca/villeray-saint-michel-parc-extension">Villeray–Saint-Michel–Parc-Extension</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='montreal-logo'>
                <nav className="row footer-last align-items-center justify-content-center justify-content-lg-between" aria-labelledby="footer-legal-section">
                    <div className="col-auto mb-4 mb-lg-0">
                        <svg className="footer-logo reverse" x="0px" y="0px" viewBox="0 0 184.6 39.3" aria-labelledby="logo-vdm-footer" role="img">
                            <title id="logo-vdm-footer">Ville de Montréal</title>
                            <polyline className="letter" points="0,6.6 6.1,6.6 13.9,27.9 14,27.9 21.8,6.6 27.7,6.6 27.7,32.8 23.6,32.8 23.6,10.2 23.5,10.2 15.2,32.8 11.8,32.8 3.5,10.2 3.4,10.2 3.4,32.8 0,32.8 0,6.6   ">
                            </polyline>
                            <path className="letter" d="M39.3,31.6c3.7,0,4.1-4.6,4.1-7.9c0-3.3-0.4-7.9-4.1-7.9c-3.6,0-4.1,4.6-4.1,7.9C35.2,27.1,35.7,31.6,39.3,31.6 M30.7,23.8 c0-6.1,2.9-9.4,8.6-9.4s8.6,3.3,8.6,9.4s-2.9,9.4-8.6,9.4S30.7,29.9,30.7,23.8z"></path>
                            <path className="letter" d="M51.1,14.7h4.1V19h0.1c0.7-1.3,2.5-4.7,6.8-4.7c3.4,0,4.9,2.7,4.9,5.3v13.2h-4.1V21.5c0-2.3-0.4-4.3-2.5-4.3 c-4.1,0-5.2,5.9-5.2,8.2v7.5h-4.1L51.1,14.7"></path>
                            <path className="letter" d="M82,32.9c-0.8,0.2-1.9,0.3-2.9,0.3c-3.9,0-6.1-1.1-6.1-4.6V16.7h-3.1v-2H73v-4.2l4.1-2.3v6.6h5.3v2h-5.3v10.4 c0,2.7,0.3,3.9,2.9,3.9c0.7,0,1.4-0.1,1.9-0.3L82,32.9"></path>
                            <path className="letter" d="M85.1,14.7h4.1v4.6h0.1c1.3-2.4,2.7-4.7,6.3-5v4c-4,0.1-6.4,1.4-6.4,6.2v8.3h-4.1V14.7"></path>
                            <path className="letter" d="M105.8,6.6h4.3l-4,5H103L105.8,6.6 M108.8,20c0-1.4-0.5-4.1-3.6-4.1c-3.2,0-3.8,3-3.9,4.1H108.8z M112.5,32.2 c-1.7,0.6-3.2,1-5.7,1c-5.4,0-9.7-3-9.7-10.2c0-5,2.2-8.6,8.3-8.6c6.3,0,7.5,3.9,7.5,7.4h-11.7c0,3.6,1.7,9.5,7.6,9.5 c1.3,0,2.5-0.2,3.7-0.8V32.2z"></path>
                            <path className="letter" d="M126.1,24.3c-1.7,0.1-6.4,0.5-6.4,3.8c0,1.6,1,2.7,2.4,2.7s4-1.3,4-4.4V24.3 M126.1,30.3L126.1,30.3 c-0.7,1.1-2.5,2.9-5.6,2.9s-5.3-2-5.3-4.5c0-5.6,8.3-5.8,10.9-6v-1.6c0-2,0-5.2-2.7-5.2c-2.5,0-3,1.8-3.2,3.9h-4.3 c0.2-2.7,1.4-5.5,7.5-5.5c6.4,0,6.9,3.3,6.9,6.8v11.6h-4.1L126.1,30.3L126.1,30.3z"></path>
                            <rect className="letter" x="134.5" y="6.6" width="4.1" height="26.2"></rect>
                            <path className="rosace" d="M167.3,36c-0.8-0.8-1.3-1.9-1.3-3.1V22.7c0-1.3,1.2-1.9,1.9-1.9h10.3c2.1,0,4.4,1.7,4.4,4.4c0,2.4-1.9,4.4-4.3,4.4 c-1.5,0-2.6-0.7-3.2-1.3c0,0-0.4-0.4-0.5-0.5c0.1-0.2,0.2-0.5,0.2-0.9l0,0c0-1.5-1.2-2.6-2.7-2.6c-0.7,0-1.3,0.3-1.8,0.7 c-0.5,0.5-0.8,1.2-0.8,1.9s0.3,1.4,0.8,1.9s1.1,0.7,1.9,0.7c0.4,0,0.7-0.1,0.9-0.2c0.1,0.1,0.5,0.5,0.5,0.5 c0.3,0.3,1.3,1.4,1.3,3.1l0,0c0,2.7-2.3,4.4-4.4,4.4C169.3,37.3,168.2,36.8,167.3,36 M148.7,28.3c-0.8-0.8-1.3-2-1.3-3.1 c0-1.2,0.4-2.3,1.3-3.1c0.8-0.8,1.9-1.3,3.1-1.3H162c1.3,0,2,1.1,2,1.9v10.2c0,1.2-0.5,2.3-1.3,3.1c-0.6,0.6-1.6,1.3-3.1,1.3 c-2.4,0-4.4-1.9-4.4-4.3l0,0c0-1.5,0.7-2.6,1.3-3.2c0,0,0.4-0.4,0.5-0.5c0.2,0.1,0.5,0.2,0.9,0.2c1.5,0,2.6-1.2,2.6-2.7 c0-0.7-0.3-1.3-0.7-1.8c-0.5-0.5-1.2-0.8-1.9-0.8s-1.4,0.3-1.9,0.8s-0.7,1.1-0.7,1.8l0,0c0,0.4,0.1,0.7,0.2,0.9 c-0.1,0.1-0.5,0.5-0.5,0.5c-0.3,0.3-1.4,1.3-3.1,1.3C150.6,29.6,149.5,29.1,148.7,28.3z M166,6.5c0-1.2,0.5-2.3,1.3-3.1 c0.6-0.6,1.6-1.3,3.1-1.3c1.2,0,2.3,0.5,3.1,1.3s1.3,1.9,1.3,3l0,0c0,1.5-0.7,2.6-1.3,3.2c0,0-0.4,0.4-0.5,0.5 c-0.2-0.1-0.5-0.2-0.9-0.2c-1.5,0-2.6,1.2-2.6,2.7c0,0.7,0.3,1.3,0.7,1.8c0.5,0.5,1.2,0.8,1.9,0.8l0,0c0.7,0,1.4-0.3,1.9-0.8 s0.7-1.1,0.7-1.8l0,0c0-0.4-0.1-0.7-0.2-0.9c0.1-0.1,0.5-0.5,0.5-0.5c0.3-0.3,1.4-1.3,3.1-1.3c2.7,0,4.4,2.3,4.4,4.4 c0,1.2-0.5,2.3-1.3,3.1s-1.9,1.3-3.1,1.3H168c-1.3,0-1.9-1.1-1.9-1.9L166,6.5L166,6.5z M156.5,9.7L156.5,9.7 c-0.3-0.3-1.3-1.4-1.3-3.1l0,0c0-2.7,2.3-4.4,4.4-4.4c1.2,0,2.3,0.5,3.1,1.3s1.3,1.9,1.3,3.1v10.1c0,1.3-1.1,1.9-1.9,1.9h-10.2 c-1.2,0-2.3-0.5-3.1-1.3c-0.6-0.6-1.3-1.6-1.3-3.1c0-1.2,0.5-2.3,1.3-3.1c0.8-0.8,1.9-1.3,3-1.3c1.5,0,2.6,0.7,3.2,1.3 c0,0,0.4,0.4,0.5,0.5c-0.1,0.2-0.2,0.5-0.2,0.9c0,1.5,1.2,2.6,2.7,2.6c0.7,0,1.3-0.3,1.8-0.7c0.5-0.5,0.8-1.2,0.8-1.9 s-0.3-1.4-0.8-1.9s-1.1-0.7-1.9-0.7c-0.4,0-0.7,0.1-0.9,0.2C156.9,10.1,156.5,9.7,156.5,9.7z M165,3.1c-1.3-1.9-3.3-3.1-5.5-3.1 c-3.6,0-6.5,2.9-6.5,6.5c0,0.4,0.1,0.8,0.2,1.5c-0.3-0.1-1-0.2-1.5-0.2c-3.7,0-6.5,2.8-6.5,6.4c0,2.1,1.2,4.2,3.1,5.5 c-1.9,1.3-3.1,3.3-3.1,5.4c0,3.6,2.9,6.5,6.6,6.5c0.4,0,1-0.1,1.4-0.2c-0.1,0.6-0.2,1.1-0.2,1.4c0,3.7,2.8,6.5,6.5,6.5 c2.1,0,4.1-1.1,5.4-3c1.2,1.8,3.4,3,5.5,3c3.6,0,6.4-2.9,6.4-6.5c0-0.5-0.1-1.1-0.2-1.4c0.6,0.1,1.1,0.2,1.5,0.2 c3.6,0,6.5-2.9,6.5-6.5c0-2.1-1.1-4.2-3-5.4c1.8-1.2,3-3.3,3-5.4c0-3.5-3-6.4-6.6-6.4c-0.5,0-1,0.1-1.4,0.2c0.1-0.3,0.2-1,0.2-1.5 c0-3.7-2.8-6.5-6.4-6.5C168.3,0,166.2,1.2,165,3.1z"></path>
                        </svg>
                    </div>
                </nav>
            </div>

            <div className="col-12 col-lg-auto">
                <nav>
                    <h2 className="sr-only" id="footer-legal-section">Mentions légales</h2>
                    <div className="row align-items-center justify-content-center justify-content-lg-end no-gutters">
                        <div className="col-md-auto text-center mb-4 mb-md-0">
                            <ul className="list-inline list-inline-dot font-size-sm-interface">
                                <li className="list-inline-item">
                                    <a href className="cky-banner-element btn btn-as-link">Fichiers témoins</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/sujets/politique-de-confidentialite">Politique de confidentialité</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/articles/mentions-legales">Mentions légales</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-auto text-center">
                            <a href="/en/notices-and-alerts" id="shell-change-language-link-footer" className="btn btn-lang">English</a>
                        </div>
                    </div>
                </nav>
            </div >
            </div>
        </>
    )
}

export default Footer;