import categoriesOptions from '../components/categoriesOptions.js';
const categoriesContainer = document.querySelector('#categories');

const displayCategories = (categories) => {

    for(let i = 0; i < categories.length; i++) {
        const id = categories[i].id;
        const name = categories[i].name;
        categoriesContainer.innerHTML += categoriesOptions(id, name);
    };
};

export default displayCategories;