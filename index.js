const input = document.getElementById('email');
const message = document.getElementById('message');
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validateForm() {
  if (input.value.length === 0) {
    message.innerText = 'You must provide an e-mail address';
    message.style.color = 'red';
    message.style.opacity = 1;
    message.style.transform = 'translateY(0px)';
  } else {
    message.innerText = '';
    if (input.value.match(mailformat)) {
      message.innerText = 'Submit succes!';
      message.style.color = '#497933';
      message.style.opacity = 1;
      message.style.transform = 'translateY(0px)';
      input.focus();
      return true;
    } else {
      message.innerText = 'You have entered an invalid email address!';
      message.style.color = 'red';
      message.style.opacity = 1;
      message.style.transform = 'translateY(0px)';
      input.focus();
    }
  }
  return false;
}
