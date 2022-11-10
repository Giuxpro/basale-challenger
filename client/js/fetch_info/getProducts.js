import displayInfo from '../utils/displayInfo.js';
const url = 'http://localhost:3001';

const getProducts = () => {
    fetch(`${url}/products`)
    .then(res => res.json())
    .then(data => {
        displayInfo(data);
        return;
    });
};

export default getProducts;