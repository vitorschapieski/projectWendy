//TEXTO ANIMADO
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const frase = document.querySelector('#i-frase')

const textArray = ["Alegria", "Amor", "Felicidade", "Taylor"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 500; 
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

document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//FOTO DE USUARIO NA HOME
let foto = document.getElementById('nav-menu-img');
let bntLogin = document.querySelector('#btn-login');
let bntCad = document.querySelector('#btn-cad');
let nomeUser = document.querySelector('#nome-User')

let userLogado = JSON.parse(localStorage.getItem('userLogado'))

if(localStorage.getItem('userLogado') == null){
  foto.setAttribute('Style', 'display:none')
} else{
  foto.setAttribute('Style', 'display:block')
  bntLogin.setAttribute('Style', 'display:none')
  bntCad.setAttribute('Style', 'display:none')
  nomeUser.innerHTML = userLogado.nome
}
