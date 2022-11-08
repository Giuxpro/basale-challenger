const db = require('../../db');

const getProductsByName = async (res, name) => {

    try {
        await db.query(`SELECT * FROM product WHERE name LIKE '%${name}%'`, (err, rows, fields) => {
            if(rows.length === 0) {
                return res.status(404).json({error:`There are no product with name '%${name}`});
            } else {
                res.send(rows);
            }
        })
    } catch(error){
        return res.status(404).json({error: error});
    }
}

module.exports =  getProductsByName;
