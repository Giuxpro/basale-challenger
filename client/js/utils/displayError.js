const messageError = document.querySelector('#messageError');

const displayError = (msjError) => {
    messageError.innerHTML = `
        <div class="alert alert-warning role="alert">
            <p class="center p-0">${msjError.error}</p>
        </div>  
    `;

    setTimeout(() => {
        messageError.innerHTML = '';
    }, 3000);
};

export default displayError;