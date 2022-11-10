const db = require('../../db.js');

const getProductsByCategory = async (res, category) => {

    try {
        await db.query(`SELECT * FROM product WHERE category = ${category}`, (err, rows) => {
            if(rows.length === 0) {
                return res.status(404).send(`Lo sentimos de momento no tenemos la categoria ${category}`);
            } else {
                res.send(rows);
            }
        });
    } catch (err){
        return res.status(404).json({error: err});
    }
};

module.exports = getProductsByCategory;