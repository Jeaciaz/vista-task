import React from 'react';
import PatientList from './components/PatientList';
import PatientData from './components/PatientData';
import './App.css';

function App() {
  return (
    <div className="App">
			<PatientData />
			<PatientList />
    </div>
  );
}

export default App;
