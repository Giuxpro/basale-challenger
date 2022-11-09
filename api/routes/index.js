const { Router } = require('express');
const products = require('./products/products.routes');
const categories = require('./categories/categories.routes');
const productsByCategory = require('./products/productsByCategory.routes');
const router = Router();


/* Importing the routes from the files in the routes folder. */
router.use('/', products);
router.use('/', categories);
router.use('/', productsByCategory);


module.exports = router;
