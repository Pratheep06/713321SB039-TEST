const products = [
    { id: 1, name: 'BMW M5', price: 4449.99, image: 'C:\Users\student\Desktop\ecommerce website\m5-exterior-right-front-three-quarter-2.jpg' },
    { id: 2, name: 'BMW M4', price: 3229.99, image: 'C:\Users\student\Desktop\ecommerce website\m4-competition-exterior-right-front-three-quarter-2.jpg' },
    { id: 3, name: 'BMW M3', price: 2999.99, image: 'C:\Users\student\Desktop\ecommerce website\front-left-side-47.jpg' },
    { id: 4, name: 'BMW M2', price: 2199.99, image: 'C:\Users\student\Desktop\ecommerce website\door-handle-45.jpg' },
    { id: 5, name: 'BMW M8', price: 4449.99, image: 'C:\Users\student\Desktop\ecommerce website\m5-exterior-right-front-three-quarter-2.jpg' },
    { id: 6, name: 'BMW XM', price: 3229.99, image: 'C:\Users\student\Desktop\ecommerce website\m4-competition-exterior-right-front-three-quarter-2.jpg' },
    { id: 7, name: 'BMW 7', price: 2999.99, image: 'C:\Users\student\Desktop\ecommerce website\front-left-side-47.jpg' },
    { id: 8, name: 'BMW 6', price: 2199.99, image: 'C:\Users\student\Desktop\ecommerce website\door-handle-45.jpg' },
];

const productsContainer = document.getElementById('products');

function renderProducts() {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    // Logic to add product to cart goes here
    alert(`Product ${productId} added to cart!`);
}

renderProducts();
