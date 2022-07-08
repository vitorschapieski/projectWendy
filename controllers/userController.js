const userController = {
    indexLogin: (req, res) => {
        res.render('login')
    },
    indexCadastro: (req, res) => {
        res.render('cadastro')
    } 
}

module.exports = userController;