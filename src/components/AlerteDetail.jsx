import React from 'react';
import './AlerteDetail.css';

function AlerteDetail({ alert }) {
    return (
        <div className="aside-grid-container">
            <div className="main-content">
            <h2>{alert.properties.titre}</h2>
                <p>Start Date: {new Date(alert.properties.date_debut).toLocaleString()}</p>
                <p>End Date: {new Date(alert.properties.date_fin).toLocaleString()}</p>
                <p>Type: {alert.properties.type}</p>
                <p>Publisher: {alert.properties.service_publieur}</p>
                {/* <a href={alert.properties.lien} target="_blank" rel="noopener noreferrer">
                {alert.properties.lien}
            </a> */}
            </div>
            <aside className="aside">
            <h3>S'abonner aux alertes</h3>
            </aside>
        </div>
    );
}

export default AlerteDetail;

