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