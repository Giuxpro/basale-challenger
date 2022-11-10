
const categoriesOptions = (id, name) => {
    const options = `
        
        <button value="${id}">${name}</button>
    `;
    return options;
};

export default categoriesOptions;