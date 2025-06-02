import React from 'react';
import './Footer.css';
import favicon32 from './../assets/favicon-32x32.png';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="back-to-top">
                    <a href="#main-content" className="link-page-top ml-auto shell-scroll-trigger">Haut de page</a>
                </div>


                <div className="row">
                    <div className="link-group">
                        <h3 className="list-heading text-white">Mon compte</h3>
                        <ul className="list-unstyled mb-4 mb-md-8">
                            <li><a href="/sujets/compte-pour-acceder-aux-services-de-la-ville">À propos de mon compte</a></li>
                            <li><a href="/avis-et-alertes">Avis et alertes</a></li>
                            <li><a href="/demarches/creer-un-compte">Créer mon compte</a></li>
                        </ul>
                    </div>


                    <div className="link-group">
                        <h3 className="list-heading text-white">Communiquer avec nous</h3>
                        <ul className="list-unstyled mb-4 mb-md-8">
                            <li><a href="/services/acces-linformation">Demande d'accès à l'information</a></li>
                            <li><a href="/nous-joindre">Nous joindre</a></li>
                            <li><a href="/signaler-un-probleme">Signaler un problème</a>
                            </li>
                        </ul>
                    </div>


                    <div className="link-group">
                        <h3 className="list-heading text-white">Travailler avec nous</h3>
                        <ul className="list-unstyled mb-4 mb-md-8"><li>
                            <a href="https://montreal.ca/services/appels-doffres-et-contrats">Appels d'offres</a></li>
                            <li><a href="/articles/offres-demploi-2944">Emplois</a></li>
                            <li><a href="http://ville.montreal.qc.ca/portal/page?_pageid=4657,89479628&amp;_dad=portal&amp;_schema=PORTAL">Fournisseurs</a></li>
                        </ul>
                    </div>


                    <div className="link-group">
                        <h3 className="list-heading text-white">Visiter Montréal</h3>
                        <ul className="list-unstyled mb-4 mb-md-8">
                            <li><a href="/lieux/hotel-de-ville">Hôtel de ville</a></li>
                            <li><a href="/services/mtlwifi-acces-gratuit-internet">MTLWiFi</a></li>
                            <li><a href="https://www.mtl.org/fr">Tourisme Montréal</a>
                            </li>
                        </ul>
                    </div>


                    <div className="link-group">
                        <h3 className="list-heading text-white">À propos de nous</h3>
                        <ul className="list-unstyled mb-4 mb-md-8">
                            <li><a href="https://ville.montreal.qc.ca/portal/page?_pageid=5798,43301618&amp;_dad=portal&amp;_schema=PORTAL">Avis publics</a></li>
                            <li><a href="/communiques-de-presse">Communiqués</a></li><li><a href="/sujets/ententes-de-partenariat-et-visibilite">Ententes de partenariat</a></li>
                            <li><a href="/services/recherche-de-reglements">Règlements</a></li><li><a href="/unites/salle-des-medias">Salle des médias</a></li>
                        </ul>
                    </div>


                    <div className="link-group">
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
                    <div className="link-group">
                        <h3 className="list-heading text-white"> Arrondissements</h3>
                        <ul className="list-unstyled arrondissements">
                            <li><a href="https://montreal.ca/ahuntsic-cartierville">Ahuntsic-Cartierville</a></li>
                            <li><a href="https://montreal.ca/anjou">Anjou</a></li>
                            <li><a href="https://montreal.ca/cote-des-neiges-notre-dame-de-grace">Côte-des-Neiges–Notre-Dame-de-Grâce</a></li>
                            <li><a href="https://montreal.ca/lile-bizard-sainte-genevieve">L'Île-Bizard–Sainte-Geneviève</a></li>
                            <li><a href="https://montreal.ca/lachine">Lachine</a></li>
                        </ul>
                    </div>

                    <div className="link-group">
                        <ul className='list-unstyled arrondissements'>
                            <li><a href="https://montreal.ca/lasalle">LaSalle</a></li>
                            <li><a href="https://montreal.ca/le-plateau-mont-royal">Le Plateau-Mont-Royal</a></li>
                            <li><a href="https://montreal.ca/le-sud-ouest">Le Sud-Ouest</a></li>
                            <li><a href="https://montreal.ca/mercier-hochelaga-maisonneuve">Mercier–Hochelaga-Maisonneuve</a></li>
                            <li><a href="https://montreal.ca/montreal-nord">Montréal-Nord</a></li>
                        </ul>
                    </div>

                    <div className="link-group">
                        <ul className='list-unstyled arrondissements'>
                            <li><a href="https://montreal.ca/outremont">Outremont</a></li>
                            <li><a href="https://montreal.ca/pierrefonds-roxboro">Pierrefonds-Roxboro</a></li>
                            <li><a href="https://montreal.ca/riviere-des-prairies-pointe-aux-trembles">Rivière-des-Prairies–Pointe-aux-Trembles</a></li>
                            <li><a href="https://montreal.ca/rosemont-la-petite-patrie">Rosemont–La Petite-Patrie</a></li>
                        </ul>
                    </div>

                    <div className="link-group">
                        <ul className='list-unstyled arrondissements'>
                            <li><a href="https://montreal.ca/saint-laurent">Saint-Laurent</a></li>
                            <li><a href="https://montreal.ca/saint-leonard">Saint-Léonard</a></li>
                            <li><a href="https://montreal.ca/verdun">Verdun</a></li>
                            <li><a href="https://montreal.ca/ville-marie">Ville-Marie</a></li>
                            <li><a href="https://montreal.ca/villeray-saint-michel-parc-extension">Villeray–Saint-Michel–Parc-Extension</a></li>
                        </ul>
                    </div>
                </div>
                </div>

                <div className="footer-end">
                    <div className="footer-end-left">
                        <NavLink to="/">
                            <div className="organization-name">Montréal</div>
                        </NavLink>
                        <img src={favicon32} className="montreal logo" alt="Montréal logo" />
                    </div>

                    <div className="footer-end-right">
                        <nav>
                                <p>Fichiers témoins</p>
                                <a href="/sujets/politique-de-confidentialite">Politique de confidentialité</a>
                                <a href="/articles/mentions-legales">Mentions légales</a>
                        </nav>
                    </div >
                </div>

        </>
    )
}

export default Footer;