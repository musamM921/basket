class Products {
    render() {
        let htmlCatalog = '';
        CATALOG.forEach(({id, name, price, img}) => {
           
            htmlCatalog += `
            <li>
            <span${name}></span>
            <img scr="${img}"/>
            <span>${price}</span>
            <button>Добавить в Корзину</button>
            </li>
            `;
        });

        const html = `
        <ul>
        ${htmlCatalog}
        </ul>`;
    }
}

const productsPage = new Products();
productsPage.render();