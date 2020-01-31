import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './PatientList.scss'
import axios from 'axios';

export default function PatientList(props) {
	const [presentPatients, setPresentPatients] = useState([]);
	const [retiredPatients, setRetiredPatients] = useState([]);
	const [isDisplayingRetired, setIsDisplayingRetired] = useState(false);

	useEffect(() => {
		axios.get('https://api.myjson.com/bins/1c3a76').then(res => {
			setPresentPatients(res.data);
		});

		axios.get('https://api.myjson.com/bins/qryqq').then(res => {
			setRetiredPatients(res.data);
		});
	}, []);

	const patientList = (isDisplayingRetired ? retiredPatients : presentPatients).map(patient => (
		<tr key={patient.historyNumber} className={classNames('patients-list__table-row', {selected: props.selectedPatient && props.selectedPatient.historyNumber === patient.historyNumber})} onClick={() => props.onPatientSelected(patient)}>
			<td>{patient.historyNumber}</td>
			<td>{patient.lastName} {patient.firstName} {patient.patrName}</td>
			<td>{isDisplayingRetired ? patient.cause : patient.bedNumber}</td>
		</tr>
	));

	return (
		<section className="patients-list">
			<nav className="patients-list__nav">
				<button className={classNames('patients-list__nav-link', {active: !isDisplayingRetired})} onClick={() => setIsDisplayingRetired(false)}>
					Присутствуют {presentPatients.length > 0 && `(${presentPatients.length})`}
				</button>
				<button className={classNames('patients-list__nav-link', {active: isDisplayingRetired})} onClick={() => setIsDisplayingRetired(true)}>
					Выбывшие {retiredPatients.length > 0 && `(${retiredPatients.length})`}
				</button>
			</nav>
			<table className="patients-list__table">
				<thead className="patients-list__table-head">
					<tr>
						<th>№ ИБ</th>
						<th>ФИО</th>
						<th>{ isDisplayingRetired ? 'Причина выбытия' : 'Палата' }</th>
					</tr>
				</thead>
				<tbody>
					{ patientList }
				</tbody>
			</table>
		</section>
	)
}
