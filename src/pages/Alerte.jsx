import { useParams } from 'react-router-dom';
import AlerteDetail from '../components/AlerteDetail';

function Alerte({ apiData }) {
    const { id } = useParams();
    console.log("Alert ID from URL:", id);
    console.log("API Data received:", apiData); // Debug statement

    const alert = apiData?.result?.records?.find(
        (item) => item._id === parseInt(id, 10)
    );

    console.log("Filtered Alert Data:", alert);

    if (!alert) {
        return <p>Alert not found</p>;
    }

    return <AlerteDetail alert={alert} />;
}

export default Alerte;
