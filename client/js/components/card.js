
const card = (image, name, price) => {
    const imageUnavailable = 'https://www.delsol.com.mx/wcsstore/ExtendedSitesCatalogAssetStore/images/foto-no-disponible.png'
    const card = `
    <div class="card" style="width: 16rem;">
        <div class="imgCard d-flex align-items-center justify-content-center p-2">
            <img src="${image ? image : imageUnavailable}"alt="${name}">
        </div>
        <div class="card-body p-2 bg-light">
            <p class="card-text">${name}</p>
            <p class="text-primary pt-2">$${price}</p>
        </div>
    </div>
    `;
    return card
};

export default card;