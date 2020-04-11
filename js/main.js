(() => {
	let openButton = document.querySelectorAll(".LightBoxImg"),
  lightbox = document.querySelector(".LightBox"),
  closeButton = document.querySelector(".close-button"),
  headText = document.querySelector(".LightBox h2"),
  paraText = document.querySelector(".LightBoxInfo");

const headData = [["Tetley's Draught"],["Tetley's Lager"], ["Tetley's Extra Scout"], ["Tetley's Dublin Porter"],["Tetley's West Indies Porter"], ["Tetley's Golden Ale"],["Tetley's Special Export"], ["Tetley's Smooth"]];

const data = [[" test"],
["test"],["The scent features notes of bark, coriander and citrus on top of a rich malt base. The taste is fresh and crisp with a caramelised malt sweetness and a well-developed bitterness in the aftertaste."],["Dublin Porter is a tar black porter with a dense creamy foam crown. The taste is powerful with a rich soft sweetness and protracted bitterness in good balance. The aroma is dominated by the malt’s chocolate-like aromas, complemented by smoke and coffee."],
[""],
[""],
["Tetley’s Golden Ale is an extremely smooth, creamy ale created from a balanced combination of traditional and modern brewing techniques. Tetley’s has a nutty roasted full-bodied flavour, classic hop aroma and unique crispness on the palate."]];

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