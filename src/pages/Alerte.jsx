import AlerteDetail from "../components/AlerteDetail";
import modified_sample_data from './../assets/modified_sample_data.json';

function Alerte() {
    return (
        <>
            <AlerteDetail data={modified_sample_data}/>
        </>
    )
}

export default Alerte;