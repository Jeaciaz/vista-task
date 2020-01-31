import React, { useState, useEffect } from 'react'

export default function PatientList() {
	const [presentPatients, setPresentPatients] = useState([]);
	const [retiredPatients, setRetiredPatients] = useState([]);
	const [isDisplayingRetired, setIsDisplayingRetired] = useState(false);

	useEffect(() => {
		
	}, []);

	return (
		<div className="patients-list">
			<nav className="patients-list__nav">
				<button className="patients-list__nav-link" onClick={() => setIsDisplayingRetired(false)}>Присутствуют</button>
				<button className="patients-list__nav-link" onClick={() => setIsDisplayingRetired(true)}>Выбывшие</button>
			</nav>
			<table class="patients-list__table">
				<th className="patients-list__table-head">
					<td>№ ИБ</td>
					<td>ФИО</td>
					<td>{ isDisplayingRetired ? 'Причина выбытия' : 'Палата' }</td>
				</th>
				{ isDisplayingRetired ? (
					retiredPatients.map(patient => (
						<tr className="patients-list__table-row">
							<td>{patient.historyNumber}</td>
							<td>{patient.lastName} {patient.firstName} {patient.patrName}</td>
							<td>{patient.cause}</td>
						</tr>
					))
				) : (
					presentPatients.map(patient => (
						<tr className="patients-list__table-row">
							<td>{patient.historyNumber}</td>
							<td>{patient.lastName} {patient.firstName} {patient.patrName}</td>
							<td>{patient.bedNumber}</td>
						</tr>
					))
				) }
			</table>
		</div>
	)
}
