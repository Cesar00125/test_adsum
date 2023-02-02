'use strict'
const connection = require('./../config/connection')
async function store(req, res){
    const { fullname, company, email, phone, category_id, message } = req.body
        let sql = `Insert into forms(fullname, company, email, phone, category_id, message) values('${fullname}', '${company}', '${email}', '${phone}', '${category_id}', '${message}')`
        connection.query(sql, (err, rows, fields) => {
                if(err) throw err;
                else {
                    res.status(200).send({
                        message: '¡Registro guardado exitosamente!'
                    });
                }
        })
}

function searchEmail(req, res) {
   
    const { email } = req.body
    let sqlEmail = `Select count(*) as total from forms where email= '${email}'`
    connection.query(sqlEmail, (err, rows, fields) => {
        if(err) throw err;
        else {
            if (rows[0].total > 0) {
                res.status(422).send({
                    message: '¡El email ya existe en nuestros registros!'
                });
            }else{
                
                res.status(201).send({
                    message: 'ok'
                });
            }
        }
    })
}

function categories(req, res) {
    let sql = 'Select * from categories'
    connection.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else {
            res.json(rows)
        }
    })
}

module.exports = {
    store,
    categories,
    searchEmail
};
