const { Router } = require('express');
const router = Router();
const getProducts = require('../../controllers/products/products.controllers');
const getProductsByName = require('../../controllers/products/productsByName.controllers');

router.get('/products', async(req, res) =>{
    const {name} = req.query;

    try {
        if(name){
            return await getProductsByName(res, name);
        } else {
            return await getProducts(res);
        }
    } catch(err) {
        console.log({error:err})
    }
});


module.exports = router;
