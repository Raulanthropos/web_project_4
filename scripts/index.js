let popup = document.querySelector(".popup");
let image = document.querySelector(".profile__container-icon");
let modal_x = document.querySelector(".modal__form-x");
let inputs = document.querySelectorAll(`.modal__form-element`);
let title = document.querySelector(`.profile__title`);
let aboutMe = document.querySelector(`.profile__subtitle`);
let nameInput = document.querySelector(`.modal__form-title`);
let jobInput = document.querySelector(`.modal__form-subtitle`);
let saveProfileBtn = document.querySelector(`.form__btn`);
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

image.addEventListener(`click`, function () {
  popup.classList.add("popup_active");
  editProfile();
});

modal_x.addEventListener(`click`, closeProfile);
saveProfileBtn.addEventListener(`click`, saveProfile);