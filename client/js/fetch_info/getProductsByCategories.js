import displayInfo from '../../js/utils/displayInfo.js';
const url = 'http://localhost:3001';

const getProductsByCategories = (category) => {
    console.log(category,"cat");
    fetch(`${url}/products/${category}`)
    .then(res => res.json())
    .then(data => {
        displayInfo(data);
        return;
    })
};

export default getProductsByCategories;