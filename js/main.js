(() => {

const dropZones = document.querySelectorAll('.drop-zone');
		recordImg = document.querySelectorAll('.record');

const images = ["top", "middle", "bottom"]; 
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

	let currentImage = event.dataTransfer.getData("text/plain");

	event.target.appendChild(document.querySelector(`#${currentImage}`));
}

recordImg.forEach(piece => piece.addEventListener('dragstart', dragstart))
dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));

})();