// products.js — ShopBuggy product catalogue logic

const products = [
  { id: 1,  name: 'Wireless Noise-Cancelling Headphones', category: 'electronics', price: 129.99, rating: 4.7, emoji: '🎧' },
  { id: 2,  name: 'Slim-Fit Chino Trousers',             category: 'fashion',      price: 44.50,  rating: 4.2, emoji: '👖' },
  { id: 3,  name: 'Stainless Steel Water Bottle',        category: 'home',         price: 22.00,  rating: 4.9, emoji: '🍶' },
  { id: 4,  name: 'Yoga Mat Pro',                        category: 'sports',       price: 35.00,  rating: 4.5, emoji: '🧘' },
  { id: 5,  name: 'Bluetooth Mechanical Keyboard',       category: 'electronics',  price: 89.00,  rating: 4.6, emoji: '⌨️' },
  { id: 6,  name: 'Floral Summer Dress',                 category: 'fashion',      price: 57.99,  rating: 4.1, emoji: '👗' },
  { id: 7,  name: 'Bamboo Cutting Board Set',            category: 'home',         price: 19.95,  rating: 4.8, emoji: '🪵' },
  { id: 8,  name: 'Adjustable Dumbbell 20kg',            category: 'sports',       price: 149.00, rating: 4.3, emoji: '🏋️' },
  // BUG #9: Price is undefined → renders as $NaN
  { id: 9,  name: 'Portable LED Desk Lamp',              category: 'electronics',  price: undefined, rating: 4.0, emoji: '💡' },
  { id: 10, name: 'Linen Overshirt',                     category: 'fashion',      price: 62.00,  rating: 3.9, emoji: '👔' },
  { id: 11, name: 'Ceramic Plant Pot (Set of 3)',        category: 'home',         price: 28.50,  rating: 4.6, emoji: '🪴' },
  { id: 12, name: 'Running Shoes — Trail Edition',       category: 'sports',       price: 109.00, rating: 4.7, emoji: '👟' },
];

let visibleProducts = [...products];

function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');

  if (list.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  grid.innerHTML = list.map(p => `
    <div class="product-card" data-category="${p.category}" data-id="${p.id}">
      <div class="product-img" style="display:flex;align-items:center;justify-content:center;font-size:3.5rem;background:#f9fafb;">${p.emoji}</div>
      <div class="product-body">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <!-- BUG #9: undefined price renders as $NaN -->
        <div class="product-price">$${parseFloat(p.price).toFixed(2)}</div>
        <div class="product-footer">
          <div class="product-rating">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))} <span style="color:#6b7280;font-size:0.8rem;">${p.rating}</span></div>
          <button class="btn btn-primary btn-sm" onclick="addToCart()">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

// BUG #10: search is case-sensitive and doesn't trim whitespace
function filterProducts() {
  const query = document.getElementById('searchInput').value; // missing .trim().toLowerCase()
  visibleProducts = products.filter(p => p.name.includes(query));
  renderProducts(visibleProducts);
}

// BUG #6: JS reads from 'catFilter' but HTML select has id="categoryFilter" — never matches, filter does nothing
function filterByCategory() {
  const val = document.getElementById('catFilter') ? document.getElementById('catFilter').value : '';
  if (!val) {
    visibleProducts = [...products];
  } else {
    visibleProducts = products.filter(p => p.category === val);
  }
  renderProducts(visibleProducts);
}

// BUG #7: sorts alphabetically (localeCompare on price string) instead of numerically
function sortByPrice() {
  visibleProducts = [...visibleProducts].sort((a, b) =>
    String(a.price).localeCompare(String(b.price))
  );
  renderProducts(visibleProducts);
}

function resetProducts() {
  visibleProducts = [...products];
  document.getElementById('searchInput').value = '';
  renderProducts(visibleProducts);
}

// Init on load
document.addEventListener('DOMContentLoaded', () => renderProducts(products));
