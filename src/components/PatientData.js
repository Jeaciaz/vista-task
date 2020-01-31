import React from 'react';
import './PatientData.scss';

function getYearsPassedSinceDate(date) {
	// Because JS starts dates from year 1970
	return (new Date(Date.now() - new Date(date))).getUTCFullYear() - 1970;
}

function resetWidth() {
	document.querySelector('.patient-data').style.width = '0px';
}

export default function PatientData(props) {
	return (
		<section className="patient-data" style={{width: '50%'}}>
			<header className="patient-data__header">
				<h2>Информация о пациенте</h2>
				<button className="patient-data__btn-collapse" onClick={resetWidth}>&lt;</button>
			</header>
			<ul className="patient-data__list">
				<li>ФИО: <span className="patient-data__field">{props.patient ? `${props.patient.lastName} ${props.patient.firstName} ${props.patient.patrName}` : '___'}</span></li>
				<li>Возраст: <span className="patient-data__field">{props.patient ? getYearsPassedSinceDate(props.patient.birthDate) : '___'}</span></li>
				<li>Диагноз: <span className="patient-data__field">{props.patient ? props.patient.diagnosis : '___'}</span></li>
			</ul>
		</section>
	)
}
