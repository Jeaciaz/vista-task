import React, { useState } from 'react';
import PatientList from './components/PatientList';
import PatientData from './components/PatientData';
import Separator from './components/Separator';
import './App.scss';

function App() {
	const [currentPatient, setCurrentPatient] = useState(null);
	
  return (
    <div className="App">
			<PatientData patient={currentPatient} />
			<Separator />
			<PatientList selectedPatient={currentPatient} onPatientSelected={setCurrentPatient} />
    </div>
  );
}

export default App;
