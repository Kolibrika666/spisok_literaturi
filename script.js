"use strict"; // этот код работает в современном режиме


//скрываем главный элемент, чтобы при нажатии на кнопку он исчезал (не работает)
const show = () => {
  document.getElementById(glava).style.display = 'none';
  }

  const button_a = document.querySelector('button a');
  button_a.addEventListener('click', show);