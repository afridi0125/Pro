// Add product to cart
function addToCart(productName, productPrice) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart.`);
  }
  
  // Display cart items
  function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartSummaryDiv = document.getElementById('cart-summary');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    if (cart.length === 0) {
      cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
      cartSummaryDiv.innerHTML = "";
      return;
    }
  
    cartItemsDiv.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>₹${item.price}</span>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      </div>
    `).join('');
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartSummaryDiv.innerHTML = `<h3>Total: ₹${total}</h3>`;
  }
  
  // Remove an item
  function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
  
  // Checkout
  function checkout() {
    if (confirm("Confirm your order?")) {
      localStorage.removeItem('cart');
      alert("Thank you for your purchase!");
      window.location.href = "index.html";
    }
  }
  
  // Load cart on cart.html
  if (window.location.pathname.includes('cart.html')) {
    window.onload = displayCart;
  }