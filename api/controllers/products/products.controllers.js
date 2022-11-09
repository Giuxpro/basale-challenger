const db = require('../../db.js');

const getProducts = async (res) => {

    try{
        await db.query( "SELECT * FROM product", (err, rows) => {
            if(err) throw err;
            res.send(rows);    
        });
    } catch(error){
        console.log({error: error})
    }
}

module.exports = getProducts;