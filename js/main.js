(() => {

const dropZones = document.querySelectorAll('.drop-zone');
		recordImg = document.querySelectorAll('.record');
		reset = document.querySelector('button')
		mixerAudio = document.querySelector('audio');

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

	if (this.children.length > 0) { return false; }

	let currentImage = event.dataTransfer.getData("text/plain");

	event.target.appendChild(document.querySelector(`#${currentImage}`));
	//let targetName = this.className.split(" ")[1]; //this wil strip out the house name 
  //let targetSource = targetName.slice(1);
  let newAudioSource = `audio/bass.wav`
	mixerAudio.src = newAudioSource;
	mixerAudio.load();
	mixerAudio.play();
}

function resetPieces() {

	console.log('reset mixer');
	dropZones.forEach(zone =>{
		if (zone.children.length > 0) {
			document.querySelector("#dragZone").appendChild(zone.firstElementChild);
		}
	})
	mixerAudio.currentTime = 0;
	mixerAudio.pause();
}
recordImg.forEach(piece => piece.addEventListener('dragstart', dragstart))
dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));
reset.addEventListener('click', resetPieces);

})();