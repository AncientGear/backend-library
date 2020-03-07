const {pool} = require('../database/connection');

const login = (req, res) => {
    let body = req.body;

    pool.query('SELECT * FROM ')
    
    res.send('Bienvenido al login');
}

module.exports = {
    login,
}