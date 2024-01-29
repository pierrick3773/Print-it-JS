// tableau contenant les images de la baniere
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
console.log(slides);

slides.forEach(function (slides, index) {
  console.log(slides, index);
});
/* pour chaque slides on lance la function qui utilise les parametres slides et index
pour affiché le nom de slide et son index dans le tableau */

let initialIndex = 0;
/* fonction qui gère la boucle du caroussel */
function loopSlide(index) {
  if (index < 0) {
    initialIndex = slides.length - 1;
    console.log(slides.length);
  } else if (index > slides.length - 1) {
    initialIndex = 0;
  }
  /* appel de la bonne image en fonction de la place dans le tableau */
  bannerImg.src = `./assets/images/slideshow/${slides[initialIndex].image}`;
  /* appel du bon texte en fonction de la place dans le tableau */
  bannerTxt.innerHTML = slides[initialIndex].tagLine;
}
// fucntion qui gère fleche droite avec changement dot et boucle infini
function nextSlide() {
  initialIndex++;
  loopSlide(initialIndex);
  nextDots();
}
// function fleche gauche
function previousSlide() {
  initialIndex--;
  loopSlide(initialIndex);
  nextDots();
}

// changement image au click arrow
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", previousSlide);
const arrowright = document.querySelector(".arrow_right");
arrowright.addEventListener("click", nextSlide);

const bannerImg = document.querySelector(".banner-img");
console.log(bannerImg);
const bannerTxt = document.querySelector("#banner p");
console.log(bannerTxt);
// creation tableau vide contenant les dots
const dots = [];
console.log(dots);

// creation des dots en dynamique en fonction du nombre images dans index
const dotsContainer = document.querySelector(".dots");
slides.forEach(function (slide, index) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
  dots.push(dot);
});

function nextDots() {
  // retirer dot_selected sur tout les autres index
  dots.forEach(function (dot) {
    dot.classList.remove("dot_selected");
  });
  /* ajouter du dot_selected sur l'index en cours  */
  dots[initialIndex].classList.add("dot_selected");
}

/* appeler pour avoir le dot blanc dès le chargement de la page et non QUE au click arrow*/

nextDots();
