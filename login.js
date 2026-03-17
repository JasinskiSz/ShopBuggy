// login.js — ShopBuggy authentication logic

function switchTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('tab'   + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
  document.getElementById('panel' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
}

// BUG #18: login accepts ANY credentials — no actual check performed
function doLogin(e) {
  e.preventDefault();
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    const errEl = document.getElementById('loginError');
    errEl.style.display = 'block';
    // BUG #19: alert-danger has white text on white background, so this message is invisible
    return;
  }

  // BUG #18: no real credential validation — always succeeds
  alert('✅ Login successful! Welcome back.');
}

// BUG #17: confirm-password check always passes — comparison is backwards / never triggers
function doRegister(e) {
  e.preventDefault();

  const first    = document.getElementById('regFirst').value.trim();
  const last     = document.getElementById('regLast').value.trim();
  const email    = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirm  = document.getElementById('regConfirm').value;
  const terms    = document.getElementById('termsCheck').checked;

  const errEl = document.getElementById('registerError');
  errEl.style.display = 'none';

  if (!first || !last || !email || !password) {
    errEl.style.display = 'block';
    // BUG #19: invisible because of white-on-white CSS
    return;
  }

  // BUG #17: condition is reversed — only shows error when passwords MATCH, not when they differ
  if (password === confirm) {
    // This block should fire when they DON'T match, but it fires when they DO
    // So mismatched passwords silently pass through
  }

  if (!terms) {
    errEl.textContent = 'You must accept the Terms of Service.';
    errEl.style.display = 'block';
    return;
  }

  alert('🎉 Account created successfully! Welcome to ShopBuggy.');
}

// BUG #20: reveals a hardcoded email in an alert dialog
function forgotPassword(e) {
  e.preventDefault();
  alert('A reset link has been sent to: admin@shopbuggy-internal.com');
}
