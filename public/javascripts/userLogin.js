
let btn = document.querySelector('.fa-eye');

let btnLogin = document.querySelector('#btnLogin')

//OLHO PARA VER A SENHA
btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else{
        inputSenha.setAttribute('type', 'password')
    }
})
//LOGIN


//CONFIGURAÇAO DO BOTAO ENTRAR
btnLogin.addEventListener('click', () => {
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')

    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    });
    if(usuario.value == '' && senha.value == ''){
        userLabel.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color: orange', 'color: orange')
        senhaLabel.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: orange', 'color: orange')
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        usuario.focus()
    } else if(usuario.value == userValid.user && senha.value == userValid.senha){

        window.location.href='/usuario'

        let token = Math.random().toString(5).substring(2)
        localStorage.setItem('token', token)




    } else{
        userLabel.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color: red', 'color: red')
        senhaLabel.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: red', 'color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuario e senhas nao existentes ou errados'
        usuario.focus()
    }






})


