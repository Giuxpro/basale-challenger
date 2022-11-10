import displayInfo from '../utils/displayInfo';
const url = 'http://localhost:3001';

const getProducts = () => {
    fetch(`${url}/products`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        displayInfo(data);
        return;
    });
};

export default getProducts;