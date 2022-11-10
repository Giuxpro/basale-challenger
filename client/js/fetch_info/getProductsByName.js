import displayInfo from '../utils/displayInfo.js';
import displayError from '../utils/displayError.js';
const url = 'http://localhost:3001';

const getProductsByName = (name) => {
    fetch(`${url}/products?name=${name}`)
    .then(res => res.json())
    .then( data => {
        inputSearch.value = '';
        if(data.error){
            return displayError(data);
        }
        displayInfo(data);
        return;
    });
};

export default getProductsByName;