let cart = [];
let total = 0;

// Show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Add to cart
function addToCart(id, name, price) {
    cart.push({ id, name, price });
    total += price;
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    
    cartTotal.textContent = total;
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase! Total: $' + total);
        cart = [];
        total = 0;
        updateCart();
    }
}

// Show Home by default on page load
window.onload = function() {
    showSection('home');
};
