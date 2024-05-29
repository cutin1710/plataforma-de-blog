const db = require('../mysql')



const getElement = (req, res) => {

    res.send(`<h1></h1>`)
}

const handleRegister = (req, res) => {

    const email = req.body.email
    const password = req.body.password 

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
        if(err) {
            res.send(err)
        }
        if(result.length == 0) {
            db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, password], (err, response) => {
                if(err) {
                    res.send(err)
                }

                res.send({ msg: 'Usuário cadastrado.' })
            })
        }else {
            res.send({ msg: 'Usário ja existe.' })
        }
    })
}



module.exports = getElement