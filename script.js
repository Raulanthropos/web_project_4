let popup = document.querySelector('.popup');
let image = document.querySelector('.profile__container-icon');
let modal_x = document.querySelector('.modal__form-x');
let inputs = document.querySelectorAll(`.modal__form-element`);

image.addEventListener(`click`, function() {
  popup.classList.add('popup_active');
})

modal_x.addEventListener(`click`, function() {
  popup.classList.remove('popup_active');
})