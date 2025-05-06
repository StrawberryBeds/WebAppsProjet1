import { useParams } from 'react-router-dom';
import AlerteDetail from '../components/AlerteDetail';

function Alerte({ apiData }) {
    const { id } = useParams();
    console.log("Alert ID from URL:", id);

    const alert = apiData?.features.find(
        (feature) => feature.id === parseInt(id, 10)
    );

    console.log("Filtered Alert Data:", alert);

    if (!alert) {
        return <p>Alert not found</p>;
    }

    return <AlerteDetail alert={alert} />;
}

export default Alerte;
