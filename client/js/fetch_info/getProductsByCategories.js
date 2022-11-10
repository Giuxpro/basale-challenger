import displayInfo from '../../js/utils/displayInfo.js';
const url = 'http://localhost:3001';

const getProductsByCategories = (category) => {
   
    fetch(`${url}/products/${category}`)
    .then(res => res.json())
    .then(data => {
        displayInfo(data);
        return;
    })
};

export default getProductsByCategories;