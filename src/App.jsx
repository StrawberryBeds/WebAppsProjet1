import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlertesEtAvis from './pages/AlertesEtAvis';
import Alerte from './pages/Alerte';
import { useState } from 'react';
import GetData from './api/getData.jsx'; // Ensure correct import

function App() {
    const [apiData, setApiData] = useState(null);

    return (
        <Router>
            <Header />
            <GetData setApiData={setApiData} /> {/* Ensure GetData is used here */}
            <Routes>
                <Route path='/' element={<AlertesEtAvis apiData={apiData} />} />
                <Route path="/alerte/:id" element={<Alerte apiData={apiData} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

