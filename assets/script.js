
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides);

slides.forEach(function(slides,index) {
	console.log(slides,index)
}); /* pour chaque slides on lance la function qui utilise les parametres slides et index
pour affiché le nom de slide et son index dans le tableau */

let initialIndex = 0;

function loopSlide(index) /* fonction qui gère la boucle du caroussel */ {
	if (index < 0) {
		initialIndex = slides.length -1
		console.log(slides.length)
	}
	else if (index > slides.length -1){
		initialIndex = 0
	}
	bannerImg.src = `./assets/images/slideshow/${slides[initialIndex].image}`; /* appel de la bonne image en fonction de la place dans le tableau */
	bannerTxt.innerHTML = slides[initialIndex].tagLine; /* appel du bon texte en fonction de la place dans le tableau */
}
 function nextSlide() {
	initialIndex++
	loopSlide(initialIndex)
	nextDots()
 }

 function previousSlide() {
	initialIndex--
	loopSlide(initialIndex)
	nextDots()
 }
const bannerImg = document.querySelector('.banner-img');
console.log(bannerImg)
const bannerTxt = document.querySelector('#banner p');
console.log(bannerTxt)
const containerDots = document.querySelector('.dots');
console.log(containerDots)
const dots = []
console.log(dots)

const arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click',previousSlide)
const arrowright = document.querySelector('.arrow_right');
arrowright.addEventListener('click',nextSlide);

const dotsContainer = document.querySelector('.dots');
slides.forEach(function(slide, index) {
	const dot = document.createElement('span'); /* pourquoi je ne créer pas les span dans mon html directement ?*/ 
	dot.classList.add('dot');
	dotsContainer.appendChild(dot)
	dots.push(dot)
});

/* pourquoi toute la partie au dessus permet de juste afficher les dots ?
pourquoi ils ne s'affichent pas directement avec le html et le css déjà créer ? */