import getProductsByCategories from './fetch_info/getProductsByCategories.js';
import getCategories from './fetch_info/getCategories.js';
import getProducts from './fetch_info/getProducts.js';
import displayError from './utils/displayError.js';
import getProductsByName from './fetch_info/getProductsByName.js';

const inputSearch = document.querySelector('#inputSearch');
const btnSubmit = document.querySelector('#btnSubmit');
const categories = document.querySelector('#categories');

window.addEventListener('DOMContentLoaded', appInit);

function appInit() {
    getCategories();
    getProducts();
    return;
};

let searchForProduct = '';

categories.addEventListener('click', (e) => {
    if(e.target.value == 0){
        getProducts();
        return;
    }
    getProductsByCategories(e.target.value);
});


inputSearch.addEventListener('input', (e) => {
    e.preventDefault();
    searchForProduct = e.target.value;
});

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if(searchForProduct === ''){
        return displayError({error:'Por favor ingresa un producto'});
    };
    getProductsByName(searchForProduct);
});

