var sair = document.querySelector('#u-sair')
var titulo = document.querySelector('#titulo')
var nomeUsuario = document.querySelector('#nomeUsuario')
var nomeUsuario2 = document.querySelector('#nomeUsuario2')
var funcaoUsuario = document.querySelector('#funcaoUsuario')

let photo = document.getElementById('imgPhoto')
let file = document.getElementById('flimage')



let userLogado = JSON.parse(localStorage.getItem('userLogado'))


//SAIR DA PAGINA SEM LOGIN
if(localStorage.getItem('token') == null){
    alert('Voce nao esta logado')
    localStorage.removeItem('token')
window.location.href='/'
}
//NOME DO USUARIO
nomeUsuario.innerHTML = userLogado.nome
nomeUsuario2.innerHTML = userLogado.nome
//FUNÇAO DO USUARIO
if(funcaoUsuario == userLogado.funcao){
    funcaoUsuario.innerHTML=userLogado.funcao
} else{
    funcaoUsuario.innerHTML=''
}
//BOTAO SAIR E APAGAR USUARIO DO BD
sair.addEventListener('click', () => {
    localStorage.removeItem('token')
window.location.href='/'
    localStorage.removeItem('userLogado')
window.location.href='/'
})
//TIRAR ESPAÇOS
const input = document.querySelector("#input");
input.addEventListener("keypress", function(e) {
    if(e.key === " ") {
      e.preventDefault();
  }
  
});
//MENSSAGEM DE PRODUTO ADICIONADO
let btnForm = document.querySelector('.btn-add');

btnForm.addEventListener('click', () => {
    let addMsg = document.querySelector('#formMsg');
    let addNome = document.querySelector('#formNome');
    let addTexto = document.querySelector('#formTexto');
    let addValor = document.querySelector('#formValor');
    let addCod = document.querySelector('#formCod');


    if(addNome.value  == '' & addTexto.value == '' & addValor.value == '' & addCod.value == ''){
        addMsg.innerHTML='preencha'
    } else{
        addMsg.setAttribute('style', 'color: green')
        addMsg.innerHTML='Criado com sucesso!'
        setTimeout(()=>{
            window.location.href = '/usuario'
        }, 3000)

    }
})

/*
addMsg.setAttribute('style', 'color: orange')
    addMsg.innerHTML='Criando produto...'
    setTimeout(()=>{
        addMsg.setAttribute('style', 'color: green')
        addMsg.innerHTML='Criado com sucesso!'
    }, 3000)
    
    setTimeout(()=>{
        window.location.href = '/usuario'
    }, 12000)

*/







