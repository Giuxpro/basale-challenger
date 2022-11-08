const db = require('../../db.js');

const getCategories = async(res) => {
    try {
        await db.query('SELECT * FROM category', (err, rows) => {
            if(err) throw err;
            res.json(rows);
        });
    } catch (err){
        console.log({error: err});
    }
}

module.exports = getCategories;