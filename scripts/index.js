let popup = document.querySelector(".popup");
let popupAdd = document.querySelector(".popup-add");
let editButton = document.querySelector(".profile__container-icon");
let addButton = document.querySelector(".profile__add-btn");
let modalX = document.querySelector(".modal__form-x");
let modalXButtonClose = document.querySelector(".button-close");
let inputs = document.querySelectorAll(`.modal__form-element`);
let title = document.querySelector(`.profile__title`);
let aboutMe = document.querySelector(`.profile__subtitle`);
let nameInput = document.querySelector(`.modal__form-element_input_title`);
let jobInput = document.querySelector(`.modal__form-element_input_subtitle`);
let editForm = document.querySelector(`.modal__form`);
let profile = {
  name: title.textContent,
  about: aboutMe.textContent
};

function editProfile() {
  nameInput.value = profile.name;
  jobInput.value = profile.about;
}

function closeProfile() {
  popup.classList.remove("popup_active");
}

function closeAddProfile() {
  popupAdd.classList.remove("popup_active");
}

function saveProfile(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  closeProfile();
}

function activateModal() {
  popup.classList.add("popup_active");
  editProfile();
}

function activateAddModal() {
  popupAdd.classList.add("popup_active");
}

editButton.addEventListener(`click`, activateModal);
addButton.addEventListener(`click`, activateAddModal);
modalX.addEventListener(`click`, closeProfile);
modalXButtonClose.addEventListener(`click`, closeAddProfile);
editForm.addEventListener(`submit`, saveProfile);