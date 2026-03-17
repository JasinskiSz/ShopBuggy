// main.js — ShopBuggy shared JavaScript

'use strict';

/* ============ CART COUNTER ============ */
// BUG #8: cart increments by 2, not 1
let cartCount = 0;

function addToCart() {
  cartCount += 2; // should be += 1
  updateCartDisplay();
}

function updateCartDisplay() {
  const els = document.querySelectorAll('.cart-count');
  els.forEach(el => { el.textContent = cartCount; });
}

/* ============ HAMBURGER NAV ============ */
// BUG #25: hamburger is display:none in CSS and never revealed,
// so this toggle code can never be triggered on mobile
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
}

/* ============ ACTIVE NAV LINK ============ */
document.addEventListener('DOMContentLoaded', () => {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Initialise cart display
  updateCartDisplay();
});
