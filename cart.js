let cart = [];

function renderShop(filter = "") {
  const shop = document.getElementById("shop");
  shop.innerHTML = "";
  products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
          .forEach(p => {
    shop.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartEl = document.getElementById("cart");
  cartEl.innerHTML = "";
  cart.forEach((item, index) => {
    cartEl.innerHTML += `<li>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">❌</button></li>`;
  });
}

function removeFromCart(i) {
  cart.splice(i, 1);
  renderCart();
}

// Search Filter
document.getElementById('searchInput').addEventListener('input', (e) => {
  renderShop(e.target.value);
});

renderShop();
