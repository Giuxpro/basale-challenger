const { Router } = require('express');
const products = require('./products/allProducts.routes');
const categories = require('./categories/categories.routes');
const router = Router();


/* Importing the routes from the files in the routes folder. */
router.use('/', products);
router.use('/', categories);


module.exports = router;
