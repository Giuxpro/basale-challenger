import card from '../components/card.js';
const productsContainer = document.querySelector('#productsContainer');

const displayInfo = (data) => {
    productsContainer.innerHTML = '';
    for(let i = 0; i < data.length; i++) {
        const image = data[i].url_image;
        const name = data[i].name;
        const price = data[i].price;
        productsContainer.innerHTML =  productsContainer.innerHTML + card(image, name, price);
    }
    return;
};

export default displayInfo;