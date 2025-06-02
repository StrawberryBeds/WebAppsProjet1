import React from 'react';
import './AlerteDetail.css';

function AlerteDetail({ alert }) {
    return (
        <div className="aside-grid-container">
            <div className="main-content">
                <h2>{alert.titre}</h2>
                <p>Start Date: {new Date(alert.date_debut).toLocaleString()}</p>
                <p>End Date: {new Date(alert.date_fin).toLocaleString()}</p>
                <p>Type: {alert.type}</p>
                <p>Publisher: {alert.service_publieur}</p>
                {/* <a href={alert.lien} target="_blank" rel="noopener noreferrer">
                    {alert.lien}
                </a> */}
            </div>
            <aside className="aside">
                <h3>S'abonner aux alertes</h3>
            </aside>
        </div>
    );
}

export default AlerteDetail;
