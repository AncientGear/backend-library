const {pool} = require('../database/connection');

const login = (req, res) => {
    let body = req.body;

    await pool.query('SELECT * FROM ')
        .then(queryResponse => {
            if(queryResponse.rows.length == 0){
                return res.status(400).send({
                    ok: false,
                    message: 'Usuario no encontrado',
                })
            }

            return res.stauts(200).send({
                ok: true,
                user: 'usuer'
            })
        })
        .catch(err => {
            return res.status(500).send({
                ok: false,
                err: {
                    message: 'Bad error to connect with server. Please, contact the Admin'
                }
            })
        })
}

module.exports = {
    login,
}