// Product Data
const products = [
    { name: 'Adobo', price: 150, image: 'images/adobo.jpg' },
    { name: 'Sinigang', price: 200, image: 'images/sinigang.jpg' },
    { name: 'Lechon', price: 500, image: 'images/lechon.jpg' },
    { name: 'Halo-halo', price: 100, image: 'images/halo-halo.jpg' }
];

// Shopping Cart
let cart = [];

// Function to display products
function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    products.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <span>${product.name}</span>
            <span>₱${product.price}</span>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Function to add product to cart
function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
            <span>₱${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
        totalPrice += item.price;
    });
    document.getElementById('total-price').innerText = totalPrice;
}

// Function to remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Initial display of products
displayProducts();