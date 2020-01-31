import React from 'react';
import './Separator.scss';

function moveSeparator(e) {
	const prevSibling = document.querySelector('.js-separator').previousSibling;
	prevSibling.style.width = (prevSibling.getBoundingClientRect().width + e.movementX) + 'px';
}

function startMovement() {
	document.addEventListener('mousemove', moveSeparator);
	document.addEventListener('mouseup', endMovement);

	// Doing this because width transitions mess up movement
	// Also disabling select because ux
	document.querySelector('.js-separator').previousSibling.style.transition = 'width 0s';
	document.documentElement.style.userSelect = 'none';
}

function endMovement() {
	document.removeEventListener('mousemove', moveSeparator);
	document.removeEventListener('mouseup', endMovement);
	
	document.querySelector('.js-separator').previousSibling.style.transition = '';
	document.documentElement.style.userSelect = '';
}

export default function Separator() {
	return <div 
		className="separator js-separator" 
		onMouseDown={startMovement}
	>⋮</div>
}
