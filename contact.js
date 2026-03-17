// contact.js — ShopBuggy contact form logic

// BUG #13: counter decrements from 0 (goes negative) instead of counting up
function updateCharCount(textarea) {
  const counter = document.getElementById('charCount');
  const typed = textarea.value.length;
  counter.textContent = 0 - typed; // should be: typed
}

// BUG #11: email validation only checks for "@" anywhere — "abc@" passes
function isValidEmail(email) {
  return email.includes('@'); // too loose, should use full regex
}

function submitContact(e) {
  e.preventDefault();

  const name    = document.getElementById('contactName').value.trim();
  const email   = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  let valid = true;

  document.getElementById('nameError').classList.remove('visible');
  document.getElementById('emailError').classList.remove('visible');
  document.getElementById('msgError').classList.remove('visible');

  if (!name) {
    document.getElementById('nameError').classList.add('visible');
    valid = false;
  }

  // BUG #11: "abc@" passes this check
  if (!email || !isValidEmail(email)) {
    document.getElementById('emailError').classList.add('visible');
    valid = false;
  }

  if (!message) {
    document.getElementById('msgError').classList.add('visible');
    valid = false;
  }

  if (!valid) return;

  // BUG #12: button permanently disabled — can never re-submit, even after "new" request
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.textContent = 'Sent!';

  // BUG #15: success div is absolute-positioned; it floats over form content instead of replacing it
  document.getElementById('contactSuccess').classList.add('show');
}
