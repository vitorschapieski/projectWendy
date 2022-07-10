const listaProdutos = [
    {img:'/joias6.png', alt:'Brincos Luxy', nome:'Brincos Luxy', valor:75.00, link:'', cod:159632, texto:'Moldados para fazer voce estar sempre otima :D'},
    {img:'/joias2.png', alt:'Pingente Abelu', nome:'Pingentes', valor:102.00, link:'', cod:369548, texto:'Tenha este lindo acessorio para onde voce for!'},
    {img:'/joias3.png', alt:'Brincos', nome:'Brinco Perolado', valor:68.00, link:'', cod:159487, texto:'A beleza que esta em voce, reflete mais ainda com nossas preciossidades.'},
    {img:'/joias5.png', alt:'Colar Ouro', nome:'Colar Ouro', valor:230.00, link:'', cod:156324, texto:'Sejá voce tambem uma grande joia!'},
    {img:'/joias7.png', alt:'Corrente', nome:'Corrente Anastashi', valor:558.00, link:'', cod:459830, texto:'Voce pode oque quiser :D'},
    {img:'/joias6.png', alt:'Brincos Luxy', nome:'Brincos Luxy', valor:75.00, link:'', cod:159632, texto:'Moldados para fazer voce estar sempre otima :D'},
    {img:'/joias2.png', alt:'Pingente Abelu', nome:'Pingentes', valor:102.00, link:'', cod:369548, texto:'Tenha este lindo acessorio para onde voce for!'},
    {img:'/joias3.png', alt:'Brincos', nome:'Brinco Perolado', valor:68.00, link:'', cod:159487, texto:'A beleza que esta em voce, reflete mais ainda com nossas preciossidades.'},
    {img:'/joias5.png', alt:'Colar Ouro', nome:'Colar Ouro', valor:230.00, link:'', cod:156324, texto:'Sejá voce tambem uma grande joia!'},
    {img:'/joias7.png', alt:'Corrente', nome:'Corrente Anastashi', valor:558.00, link:'', cod:459830, texto:'Voce pode oque quiser :D'},
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
    indexUser: (req, res) => [
        res.render('usuario')
    ]
}




module.exports = userController;
