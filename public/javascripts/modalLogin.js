function iniciaModal(modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')
}

const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', () => {
    iniciaModal('modal-login')
})