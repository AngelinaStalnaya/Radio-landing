let inputName = document.getElementById("Name");
const regex = new RegExp(/[^A-Za-zА-яа-я]/gm);

inputName.addEventListener('focusout', function () {

  let inputName = document.getElementById("Name");
  const result = regex.test(inputName.value);

  if (result) {
    inputName.classList.add('about-us__form_item-error');
  } else {
    inputName.classList.remove('about-us__form_item-error');
  }
});
