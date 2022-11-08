const { Router } = require('express');
const routes = Router();
const getCategories = require('../../controllers/categories/categories.controllers');

routes.get('/categories', async (req, res) => {

    try {
        return await getCategories(res);
    } catch (err) {
       console.log({ error: err});
    }
});

module.exports = routes;

