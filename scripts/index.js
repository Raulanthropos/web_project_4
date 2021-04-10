let popup = document.querySelector(".popup");
let editButton = document.querySelector(".profile__container-icon");
let modalX = document.querySelector(".modal__form-x");
let inputs = document.querySelectorAll(`.modal__form-element`);
let title = document.querySelector(`.profile__title`);
let aboutMe = document.querySelector(`.profile__subtitle`);
let nameInput = document.querySelector(`.modal__form-element_title`);
let jobInput = document.querySelector(`.modal__form-element_subtitle`);
let saveProfileBtn = document.querySelector(`.modal__btn`);
let editForm = document.querySelector(`.modal__form`);
let profile = {};

function updateProfile() {
  profile = {
    name: title.textContent,
    about: aboutMe.textContent,
  };
}

function editProfile() {
  updateProfile();
  nameInput.value = profile.name;
  jobInput.value = profile.about;
}

function closeProfile() {
  popup.classList.remove("popup_active");
}

function saveProfile(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  updateProfile();
  closeProfile();
}

function activateModal() {
  popup.classList.add("popup_active");
  editProfile();
}

editButton.addEventListener(`click`, activateModal);
modalX.addEventListener(`click`, closeProfile);
editForm.addEventListener(`submit`, saveProfile);