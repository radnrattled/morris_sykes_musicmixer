(() => {

const dropZones = document.querySelectorAll('.drop-zone');
		recordImg = document.querySelectorAll('.record');


function dragstart(event) {
	console.log('started a drag');
	// capture the id of the eelement we are dragging
	//the dataTransfer object is to temp store data you can retrive and use later(like an audio track)
	event.dataTransfer.setData("text/plain", this.id);
}

function allowDragOver(event) {
	event.preventDefault();
	console.log('you dragged something in me!');
}

function allowDrop(event) {
	console.log('you dropped me!');

	let currentPiece = event.dataTransfer.getData("text/plain");

	event.target.appendChild(document.querySelector(`#${currentPiece}`));
}

recordImg.forEach(piece => piece.addEventListener('dragstart', dragstart))
dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));

})();