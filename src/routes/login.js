const {Router} = require('express')
const {login} = require('../controllers/login');

let router = Router();

router.post('/login', login);

module.exports = router;