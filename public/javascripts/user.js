let btn = document.querySelector('.fa-eye');

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false
let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmeSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmeSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSucess')

let btnCad = document.querySelector('#btnCad')


//OLHO PARA VER A SENHA
btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else{
        inputSenha.setAttribute('type', 'password')
    }
})
//VALIDAÇOES DOS CAMPOS INPUTS
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 4){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome - Insira no mínimo 5 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})
usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 5){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Insira no minino 6 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})
senha.addEventListener('keyup', () => {
    if(senha.value.length <= 6){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha muito curta'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})
confirmSenha.addEventListener('keyup', () => {
    if(confirmSenha.value != senha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Senha não confere!'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Boa memoria, senhas iguais!'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
    }
})
//VALIDAÇAO DO CADASTRO DO USUARIO
btnCad.addEventListener('click', () => {
    if(validNome && validUsuario && validSenha && validConfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push({
            nomeCad: nome.value,
            userCad: usuario.value,
            senhaCad: senha.value
        })
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = 'Cadastrando . . .'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        setTimeout(()=>{
            window.location.href = '/login'
        }, 3000)        
    } else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Algo inesperado, revise suas informaçoes!'
        msgSuccess.setAttribute('style', 'display: none')
        msgSuccess.innerHTML = ''
    }
})
