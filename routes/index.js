var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.get('/', userController.indexHome)

module.exports = router;
