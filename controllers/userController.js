const listaProdutos = [
    {img:'/joias6.png', alt:'Brincos Luxy', nome:'Brincos Luxy', valor:75.00, link:'', cod:159632, texto:'Moldados para fazer voce estar sempre otima :D'},
    {img:'/joias2.png', alt:'Pingente Abelu', nome:'Pingentes', valor:102.00, link:'', cod:369548, texto:'Tenha este lindo acessorio para onde voce for!'}
]


const userController = {
    indexLogin: (req, res) => {
        res.render('login')
    },
    indexCadastro: (req, res) => {
        res.render('cadastro')
    },
    indexHome: (req, res) => {
        res.render('index', {produtos:listaProdutos})
    },
    indexUser: (req, res) => {
        res.render('usuario', {lista:listaProdutos})
    },
    indexUserFormCreate: (req, res) => {
        res.render('usuario', {lista:listaProdutos})
    }
}




module.exports = userController;
