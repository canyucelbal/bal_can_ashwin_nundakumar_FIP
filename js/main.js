(() => {
	let openButton = document.querySelectorAll(".LightBoxImg"),
  lightbox = document.querySelector(".LightBox"),
  closeButton = document.querySelector(".close-button"),
  headText = document.querySelector(".LightBox h2"),
  paraText = document.querySelector(".LightBoxInfo");

const headData = [["Can Yucel Bal"],["Ashwin Kumar"], ["something"]];

const data = [[" test"],
["test"],["something"]];

var button = document.querySelector('#button');
var burgerCon = document.querySelector('#burgerCon');

function hamburgerMenu() {
	burgerCon.classList.toggle("slideToggle");
	button.classList.toggle("expanded");
}

function showLightBox() {
	headText.textContent = `${headData[this.dataset.offset][0]}`;
	paraText.textContent = `${data[this.dataset.offset][0]}`;
	lightbox.classList.add("show-lightbox");
}
function hideLightBox() {
  lightbox.classList.remove("show-lightbox");
}

button.addEventListener("click", hamburgerMenu, false);
openButton.forEach(button => button.addEventListener("click", showLightBox));
closeButton.addEventListener("click", hideLightBox);
})();