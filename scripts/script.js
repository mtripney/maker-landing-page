const form = document.getElementById('notification-form');
const email = document.getElementById('email-notification');
const emailError = document.querySelector('.email-error');
const emailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/

const errorMessage = (errorType) => {
  if (errorType === 'missing') {
    emailError.textContent = 'Oops! Please add your email';
  } else if (errorType === 'invalid') {
    emailError.textContent = 'Oops! That doesn\'t look like an email address';
  }
  emailError.className = 'error-msg';
  email.className = 'error-input';
  return false;
}

email.addEventListener('focus', () => {
  emailError.textContent = '';
  email.classList.remove('error-input');
})

form.addEventListener("submit", event => {
  event.preventDefault();
  if (email.value === '') {
    errorMessage('missing');
  } else if (!email.value.match(emailFormat)) {
    errorMessage('invalid')
  } else {
    emailError.textContent = '';
    email.value = '';
    email.classList.remove('error-input');
  }
});
