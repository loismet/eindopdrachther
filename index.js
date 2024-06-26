// bronnen getElementedById:
// https://www.w3schools.com/jsref/prop_img_src.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

// Html elementen worden hier opgehaald met behulp van een id
const buttons = document.querySelectorAll("button");
const lippen = document.getElementById("lippen");
const oogschaduw = document.getElementById("oogschaduw");
const blush = document.getElementById("blush");
const wimpers = document.getElementById("wimpers");
const oog = document.getElementById("oog");
const liner = document.getElementById("liner");
const wenkbrauwen = document.getElementById("wenk");
const haar = document.getElementById("haar");

// audio achter buttons
// audio initialiseren dit doe ik hier voor verschillende geluidseffecten
const lippenmuziek = new Audio("audio/lipstick.mp3");
const schaduwmuziek = new Audio("audio/oogschaduw.mp3");
const haarmuziek = new Audio("audio/haar.mp3");
const blushmuziek = new Audio("audio/blush.mp3");
const wimpersmuziek = new Audio("audio/mascara.mp3");
const oogmuziek = new Audio("audio/oogblink.mp3");
const wenkmuziek = new Audio("audio/wenkbrauw.mp3");
const linermuziek = new Audio("audio/liner.mp3");

// Array met id's van alle alementen die tevoorschijn moeten komen bij de het klikken op de buttons
const elements = [
  "oogschaduwImage",
  "blushImage",
  "linerImage",
  "mascaraImage",
  "oogImage",
  "haarImage",
  "wenkImage",
  "lipstickImage",
];

// bronnen veranderen image src:
// https://www.w3schools.com/jsref/prop_img_src.asp

// bronnen geluiden achter button:
// https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48
// https://stackoverflow.com/questions/70860431/play-sound-when-button-clicked-html
// met behulp van Thomas Plas

// bronnen geluiden:
// https://pixabay.com/sound-effects/search/stift/
// https://pixabay.com/sound-effects/search/makeup/
// https://www.soundsnap.com/tags/makeup

// functie om de kleur van een van de make-up onderdelen te veranderen
function changeColor(event) {
  const categorie = event.target.dataset.categorie;
  const color = event.target.dataset.color;
  const image = "images/" + categorie + "-" + color + ".png";

  // veranderen van de afbeelding en speelt hierbij ook het bijbehorende geluid af dit ook weer afhankelijk van categorie
  if (categorie == "lippen") {
    lippen.src = image;
    lippenmuziek.play();
  } else if (categorie == "schaduw") {
    oogschaduw.src = image;
    schaduwmuziek.play();
  } else if (categorie == "blush") {
    blush.src = image;
    blushmuziek.play();
  } else if (categorie == "wimpers") {
    wimpers.src = image;
    wimpersmuziek.play();
  } else if (categorie == "oog") {
    oog.src = image;
    oogmuziek.play();
  } else if (categorie == "wenk") {
    wenkbrauwen.src = image;
    wenkmuziek.play();
  } else if (categorie == "liner") {
    liner.src = image;
    linermuziek.play();
  } else if (categorie == "haar") {
    haar.src = image;
    haarmuziek.play();
  }
}

// Event listener toevoegen aan elke knop om de kleur te veranderen bij klik
buttons.forEach(function (button) {
  button.addEventListener("click", changeColor);
});

// bronnen veranderen achtergrond:
// https://www.w3schools.com/cssref/tryit.php?filename=trycss_js_background-image

// bronnen achtergronden zelf:
// https://giphy.com/explore/transparent-star
// https://selliliar.live/product_details/13695103.html
// https://cpictures.homes/animated-clouds-gif

// Variabele voor huidige achtergrond en array met beschikbare achtergronden
let currentBackground = 0;
const backgrounds = [
  "images/hartjes2.gif",
  "images/wolken.gif",
  "images/sterren.gif",
];

// Functie om de achtergrond te veranderen
function changeBackground() {
  currentBackground = (currentBackground + 1) % backgrounds.length; // bij elke klik een andere afbeeldingen en na 3 kliks weer bij 1 dus 0,1,2 en dat constant
  document.body.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
}

// Event listener voor de knop om de achtergrond te veranderen
const changeBackgroundButton = document.getElementById("changeBackground");
changeBackgroundButton.addEventListener("click", changeBackground);

// bronnen interacties keyboard:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event
// https://oprearocks.medium.com/creating-a-keyboard-events-manager-in-javascript-without-using-switch-or-if-else-if-bcad62457b8c
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key

// deels met behulp van Sam Slotemaker

// Toetsenbord interacties toevoegen
// Functie om een knop te simuleren via een toets

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    // klikken op toets a is achtergrond veranderen
    case "a":
      changeBackground();
      break;
  }
});
// breaks binnen deze switch; zijn ervoor om niet de code constant door te laten lopen naar de volgdende case
