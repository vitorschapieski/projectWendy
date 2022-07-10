if(localStorage.getItem('token') == null){
    alert('Voce nao esta logado')
    localStorage.removeItem('token')
window.location.href='/'
}

var sair = document.querySelector('#u-sair')

sair.addEventListener('click', () => {
    localStorage.removeItem('token')
window.location.href='/'
})