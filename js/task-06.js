const input = document.getElementById('validation-input');

input.addEventListener('blur', event => {
  const inputText = event.currentTarget.value;
  
  if (inputText.length === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});