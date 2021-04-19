'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3 class="product-item__header">${title}</h3>
                <p class="product-item__text">${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
}

const renderProducts = (list) => {
    const productListHTML = list.map((item) => renderProduct(item.title, item.price));
    // list.forEach(elem => document.querySelector('.products').insertAdjacentHTML("afterend", renderProduct(elem.title, elem.price)))
    // console.log(productListHTML);
    productListHTML.forEach(elem => document.querySelector('.products').insertAdjacentHTML("beforeend", elem))
    // document.querySelector('.products').innerHTML = productListHTML;
}

renderProducts(products);
