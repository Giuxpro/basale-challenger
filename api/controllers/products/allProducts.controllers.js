const db = require('../../db.js');

const getAllProducts = async (res) => {

    try{
        await db.query( "SELECT * FROM product", (err, rows, fields) => {
            if(err) throw err;
            res.send(rows);    
        });
    } catch(error){
        console.log({error: error})
    }
}

module.exports = getAllProducts;