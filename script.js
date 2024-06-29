// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const products = document.querySelectorAll('.product');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.toggle('active', section.id === targetId);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('data-target');
            showSection(targetId);
        });
    });

    products.forEach(product => {
        product.querySelector('.add-to-cart').addEventListener('click', () => {
            const id = product.getAttribute('data-id');
            const name = product.querySelector('h3').textContent;
            const price = parseFloat(product.querySelector('p').textContent.replace('Price: $', ''));

            const cartItem = document.createElement('li');
            cartItem.innerHTML = `${name} - $${price} <button class="remove-from-cart" data-id="${id}">Remove</button>`;
            cartItems.appendChild(cartItem);

            total += price;
            totalElement.textContent = total.toFixed(2);

            cartItem.querySelector('.remove-from-cart').addEventListener('click', () => {
                cartItems.removeChild(cartItem);
                total -= price;
                totalElement.textContent = total.toFixed(2);
            });
        });
    });

    // Show home section by default
    showSection('home');
});
