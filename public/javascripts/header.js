/* Codigo para clicar no botao mobile e aparecer o menu */

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
};

btnMobile.addEventListener('click', toggleMenu);

/* Explicaçao do codigo

lin. 3 - criado a contante para capturar o ID do botao hamburguer

lin. 10 - Na constante btnMobile é adicionada uma lista de eventos daquilo que deve occorrer, neste caso, o primeiro ato é um 'CLICK' e apos ele, segue a funçao

lin. 5 - A funcçao faz:
lin. 6 - Na constante nav é adicionada o ID da navegaçao
lin. 7 - A nav recebe a propriedade classlist, que analisa se na const NAV existe a class active, o toggle faz com que se tenha active, tire, se nao tiver a classe, coloque

Lincado no codigo css header.css linha 87, faz que a nav que estava oculta (linha 78) apareca com o clik, e o toggle com um novo clik tira a class novamente desaparecendo com o nav.



*/

//TEXTO ANIMADO
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const frase = document.querySelector('#i-frase')

const textArray = ["Alegria", "Amor", "Felicidade", "Taylor"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;


function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});