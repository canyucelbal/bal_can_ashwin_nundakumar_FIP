(() => {
	let openButton = document.querySelectorAll(".LightBoxImg"),
  lightbox = document.querySelector(".LightBox"),
  closeButton = document.querySelector(".close-button"),
  headText = document.querySelector(".LightBox h2"),
  paraText = document.querySelector(".LightBoxInfo");

const headData = [["Tetley's Draught"],["Tetley's Lager"], ["Tetley’s Blonde American Lager"],["Tetley's Extra Scout"], ["Tetley's Dublin Porter"],["Tetley's Porter"], ["Tetley's Golden Ale"],["Tetley's Special Export"], ["Tetley's Smooth"]];

const data = [
["Tetley's Draught/ Tetley's Original is an amber bitter ale, which has sweet toffee apple flavours balanced with distinctly bitter dry flavours and a lingering dry bitter finish."],
["Tetley’s Lager is amber-gold in color and displays a firm malt center supported by a refreshing bitterness and floral hop aroma. Caramel malts show in the finish.The aromatic qualities of the beer are enhanced by “dry-hopping”, the centuries-old practice of steeping the beer with fresh hops as it undergoes a long, cold maturation."],
["The scent features notes of bark, coriander and citrus on top of a rich malt base. The taste is fresh and crisp with a caramelised malt sweetness and a well-developed bitterness in the aftertaste."],
["Tetley’s Extra Scout provides an harmonious balance between bitterness and the sweetness of apples, while enjoying the bright golden color with the nice looking foam. The aroma is dominated by pine, straws, hazelnut and sorrel."],
["Tetley's Dublin Porter has an almost oily-fat filling and appears black with tight mocha colored foam. The taste is sweet with a hint of dry bitterness. The aroma is powerful with notes of licorice root, newly roasted coffee, bitter chocolate and warming alcohol."],
["Tetley’s Porter  has a slightly roasted aroma with hint of brown sugar and coffee. The taste is round and complex with hints of chocolate and coffee and a slight bitterness in the aftertaste."],
["Tetley’s Golden Ale is an extremely smooth, creamy ale created from a balanced combination of traditional and modern brewing techniques. Tetley’s has a nutty roasted full-bodied flavour, classic hop aroma and unique crispness on the palate."],
["Tetley’s Special captivates with its thick foam, a rich, hoppy bouquet, the original combination of ingredients and high alcohol content, as well as the intense, superb taste. It's intense flavour makes it special and provides an unique experience for the people"],
["Tetley's Smoothflow is a smoothflow ale with a creamy caramel bitter sweetness, balanced with a pleasant hoppiness and a soft caramel finish. It provideslight hoppy aroma and just the right amount of bitterness. The smoothness gives the beer a pleasant aftertaste."]];

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