function AlerteDetail({ alert }) {
    return (
        <div>
            <h2>{alert.properties.titre}</h2>
            <p>Start Date: {new Date(alert.properties.date_debut).toLocaleString()}</p>
            <p>End Date: {new Date(alert.properties.date_fin).toLocaleString()}</p>
            <p>Type: {alert.properties.type}</p>
            <p>Publisher: {alert.properties.service_publieur}</p>
            {/* <a href={alert.properties.lien} target="_blank" rel="noopener noreferrer">
                {alert.properties.lien}
            </a> */}
        </div>
    );
}

export default AlerteDetail;

