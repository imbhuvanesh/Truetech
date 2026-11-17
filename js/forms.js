/**
 * TRUE TECH - Simple & Clear Form Validation
 * Validates the contact form with easy-to-read error messages
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

// Helper to check valid email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Show friendly error message under a field
function setError(inputElement, message) {
  const group = inputElement.closest('.form-group');
  if (!group) return;
  group.classList.add('has-error');
  let err = group.querySelector('.form-error');
  if (!err) {
    err = document.createElement('div');
    err.className = 'form-error';
    group.appendChild(err);
  }
  err.textContent = message;
}

// Clear error message
function clearError(inputElement) {
  const group = inputElement.closest('.form-group');
  if (!group) return;
  group.classList.remove('has-error');
  const err = group.querySelector('.form-error');
  if (err) {
    err.textContent = '';
  }
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => clearError(input));
    input.addEventListener('change', () => clearError(input));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    // 1. Full Name
    const name = form.querySelector('[name="fullName"]');
    if (name && !name.value.trim()) {
      setError(name, 'Please enter your name.');
      hasError = true;
    }

    // 2. Email
    const email = form.querySelector('[name="email"]');
    if (email && (!email.value.trim() || !isValidEmail(email.value.trim()))) {
      setError(email, 'Please enter a valid email address so we can reply.');
      hasError = true;
    }

    // 3. Phone (Optional or basic validation if filled)
    const phone = form.querySelector('[name="phone"]');
    if (phone && phone.value.trim() && phone.value.trim().length < 7) {
      setError(phone, 'Please enter a valid phone number.');
      hasError = true;
    }

    // 4. Message
    const message = form.querySelector('[name="message"]');
    if (message && message.value.trim().length < 10) {
      setError(message, 'Please write a short message (at least 10 characters).');
      hasError = true;
    }

    if (hasError) {
      const firstError = form.querySelector('.has-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending Message...';
    }

    const refId = 'TT-' + Math.floor(100000 + Math.random() * 900000);
    setTimeout(() => {
      window.location.href = `thank-you.html?ref=${refId}&name=${encodeURIComponent(name.value.trim())}`;
    }, 600);
  });
}
