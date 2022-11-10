import getCategories from './fetch_info/getCategories.js';
import getProducts from './fetch_info/getProducts.js';

const inputSearch = document.querySelector('#inputSerach');
const btnSubmit = document.querySelector('#btnSubmit');
const categories = document.querySelector('#categories');

window.addEventListener('DOMContentLoaded', appInit);


function appInit() {
    getCategories();
    getProducts();
    return;
}



