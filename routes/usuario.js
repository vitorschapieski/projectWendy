var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');



router.get('/', userController.indexUser);
router.post('/', userController.indexUser);



module.exports = router;
