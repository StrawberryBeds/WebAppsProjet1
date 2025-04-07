import { useParams } from 'react-router-dom';

function AlerteDetail({ data }) {
    const { id } = useParams();
    const [titre, date_debut] = id.split('-');
    const alert = data.features.find(
        (feature) =>
            feature.properties.titre === decodeURIComponent(titre) &&
            feature.properties.date_debut === date_debut
    );

    if (!alert) {
        return <p>Alert not found</p>;
    }

    return (
        <div>
            <h2>{alert.properties.titre}</h2>
            <p>Start Date: {new Date(alert.properties.date_debut).toLocaleString()}</p>
            <p>End Date: {new Date(alert.properties.date_fin).toLocaleString()}</p>
            <p>Type: {alert.properties.type}</p>
            <p>Publisher: {alert.properties.service_publieur}</p>
            <a href={alert.properties.lien} target="_blank" rel="noopener noreferrer">
                {alert.properties.lien}
            </a>
        </div>
    );
}

export default AlerteDetail;