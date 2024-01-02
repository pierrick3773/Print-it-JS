
const arrowLeft = document.querySelector ('arrow_left')
arrowLeft.addEventListener ('click')

console.log ('arrowLeft')
/* event listener  :

if slide1 et   click arrow right (event target) > slide 2

if slide 2 et click arrow right (event target) > slide 3

if slide 2 et click arrow left (event target) > slide 1

etc...

faisable avec un tableau ? */

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
