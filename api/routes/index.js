const { Router } = require('express');
const products = require('./products/allProducts.routes');
const router = Router();


/* Importing the routes from the files in the routes folder. */
router.use('/', products);


module.exports = router;
