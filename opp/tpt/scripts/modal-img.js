const images = document.getElementsByClassName("image");
const modal = document.getElementById("modal-container");
let modalImg = document.getElementById("modal-img");

Array.prototype.forEach.call(images, (item) => {
	item.addEventListener('click', () => {
		modalImg.src = item.src;
		modal.style.display = "flex";
		modal.style.alignItems = "center";
	});
});

// Get the <span> element that closes the modal.
var close = document.getElementById("close");

// When the user clicks on <span> (x), close the modal.
close.onclick = function() {
	modal.style.display = "none";
}