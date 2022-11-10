import displayCategories from '../utils/displayCategories.js';
const url = 'http://localhost:3001';

const getCategories = () => {
    fetch(`${url}/categories`)
    .then(res => res.json())
    .then(data => {
        displayCategories(data);
        return;
    });
};

export default getCategories;