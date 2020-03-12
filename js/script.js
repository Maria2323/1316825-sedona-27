var button = document.querySelector('.search');
var form = document.querySelector('.form');
var clickHandler = function() {
  form.classList.toggle('form-hidden');
};
button.addEventListener('click', clickHandler);
