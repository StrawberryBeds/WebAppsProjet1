import { useParams } from 'react-router-dom';
import AlerteDetail from '../components/AlerteDetail';
import modified_sample_data from '../assets/modified_sample_data.json';

function Alerte() {
  const { id } = useParams();
  console.log("Alert ID from URL:", id);

  const alert = modified_sample_data.features.find(
    (feature) => feature.id === parseInt(id, 10)
  );

  console.log("Filtered Alert Data:", alert);

  if (!alert) {
    return <p>Alert not found</p>;
  }

  return <AlerteDetail alert={alert} />;
}

export default Alerte;