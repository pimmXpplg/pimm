// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.parentElement;
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));
            
            // Add product to cart
            cart.push({ id: productId, name: productName, price: productPrice });
            
            // Update cart UI
            updateCart();
        });
    });

    function updateCart() {
        cartCount.textContent = cart.length;
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(listItem);
            total += item.price;
        });
        cartTotal.textContent = total.toFixed(2);
    }

    document.getElementById('checkout').addEventListener('click', function() {
        alert('Thank you for your purchase!');
        // Optionally, clear cart
        cart.length = 0;
        updateCart();
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const closeButton = document.getElementById('close-btn');
    const modal = document.getElementById('modal');

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Menyembunyikan modal
    });
});
