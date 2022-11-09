const { Router } = require('express');
const router = Router();
const getProductsByCategory = require('../../controllers/products/productsByCategory.controllers.js');

router.get('/products/:category', async (req, res) => {
   
    const category = req.params.category;

    try {
        return await getProductsByCategory(res, category);
    } catch (err) {
        return res.status(404).json({error: err})
    }

});

module.exports = router;