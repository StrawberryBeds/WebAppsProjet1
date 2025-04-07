import AlerteDetail from "../components/AlerteDetail";
import sample_data from './../assets/sample_data.json';

function Alerte() {
    return (
        <>
            <AlerteDetail data={sample_data}/>
        </>
    )
}

export default Alerte;