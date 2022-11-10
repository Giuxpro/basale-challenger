import getProductsByCategories from './fetch_info/getProductsByCategories.js';
import getCategories from './fetch_info/getCategories.js';
import getProducts from './fetch_info/getProducts.js';

const inputSearch = document.querySelector('#inputSearch');
const btnSubmit = document.querySelector('#btnSubmit');
const categories = document.querySelector('#categories');

window.addEventListener('DOMContentLoaded', appInit);


function appInit() {
    getCategories();
    getProducts();
    return;
};

categories.addEventListener('click', (e) => {
    if(e.target.value === 0){
        getProducts();
        return;
    }
    getProductsByCategories(e.target.value);
});


