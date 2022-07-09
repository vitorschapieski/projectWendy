
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
let msgSuccess = document.querySelector('#msgSuccess')



/* Olho para ver senha */

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else{
        inputSenha.setAttribute('type', 'password')
    }
})











/* validaçao dos campos de Cadastro */

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 4){
      labelNome.setAttribute('style', 'color: red')
      labelNome.innerHTML = 'Nome - Insira no mínimo 5 caracteres'
      nome.setAttribute('style', 'border-color: red')
      let validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        let validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 5){
      labelUsuario.setAttribute('style', 'color: red')
      labelUsuario.innerHTML = 'Usuario - Insira no mínimo 6 caracteres'
      usuario.setAttribute('style', 'border-color: red')
      let validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color: green')
        let validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 6){
      labelSenha.setAttribute('style', 'color: red')
      labelSenha.innerHTML = 'Senha - Insira no mínimo 7 caracteres'
      senha.setAttribute('style', 'border-color: red')
      let validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        let validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if(confirmSenha.value != senha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Senha não confere!'
        confirmSenha.setAttribute('style', 'border-color: red')
        let validConfirmSenha = false
      } else {
          labelConfirmSenha.setAttribute('style', 'color: green')
          labelConfirmSenha.innerHTML = 'Boa memoria, senhas iguais!'
          confirmSenha.setAttribute('style', 'border-color: green')
          let validConfirmSenha = true
      }
})



/* Validaçao do botao para cadastrar */






