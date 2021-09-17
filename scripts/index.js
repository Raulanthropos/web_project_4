//Variable declarations//
const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupImageTitle = document.querySelector(`.popup__image-caption`);
const editButton = document.querySelector(".profile__container-icon");
const addButton = document.querySelector(".profile__add-btn");
const modalEditClose = document.querySelector(".modal__form-close_type_edit");
const modalAddClose = document.querySelector(".modal__form-close_type_add");
const modalImageClose = document.querySelector(".popup__form-close_type_image");
const inputs = document.querySelectorAll(`.modal__form-element`);
const title = document.querySelector(`.profile__title`);
const aboutMe = document.querySelector(`.profile__subtitle`);
const captionInput = document.querySelector(`.modal__form-element_input_caption`);
const nameInput = document.querySelector(`.modal__form-element_input_title`);
const jobInput = document.querySelector(`.modal__form-element_input_subtitle`);
const linkInput = document.querySelector(`.modal__form-element_input_link`);
const editForm = document.querySelector(`.modal__form_type_edit`);
const addForm = document.querySelector(`.modal__form_type_add`);
const cardList = document.querySelector(`.elements__list`);
const form = document.querySelector('.popup__form');
const submitButton = document.querySelector('.modal__btn');
const profile = {
  name: nameInput.textContent,
  about: jobInput.textContent,
};

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const clickOnInvisibleOverlay = (evt) => {
  if (evt.target.classList.contains("popup_active")) {
    closePopup(evt.target);
  }
};

const isEscEvent = (evt, action) => {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_active");
    action(activePopup);
  }
};

const handleEscKey = (evt) => {
  evt.preventDefault();
  isEscEvent(evt, closePopup);
};

function renderCard(card, wrapper) {
  wrapper.prepend(createCard(card));
}

initialCards.forEach((card) => {
  renderCard(card, cardList);
});

function createCard(card) {
  const cardTemplate = document.querySelector(`#element-template`).content.querySelector(`.elements__card`);
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(`.elements__card-img`);
  const cardTitle = cardElement.querySelector(`.elements__card-title`);
  const deleteButton = cardElement.querySelector(".elements__trash-btn");
  const likeButton = cardElement.querySelector(".elements__card-like");

  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  deleteButton.addEventListener("click", () => {
    const listItem = deleteButton.closest(".elements__card");
    listItem.remove();
  });

  likeButton.addEventListener("click", (e) => {
    e.target.classList.toggle("elements__card-like_active");
  });

  cardImage.addEventListener(`click`, () => {
    popupImage.src = card.link;
    popupImage.alt = card.name;
    popupImageTitle.textContent = card.name;

    activateImageModal();
  });

  return cardElement;
}

function saveProfile(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  closeEditProfile();
}

function saveAddCard(evt) {
  evt.preventDefault();
  const card = {
    name: captionInput.value,
    link: linkInput.value,
  };
  renderCard(card, cardList);
  closeAddProfile();
  captionInput.value = "";
  linkInput.value = "";
  submitButton.disabled = true;
  submitButton.classList.add("modal__btn_disabled");
}

function editProfile() {
  nameInput.value = profile.name;
  jobInput.value = profile.about;
}

function closeEditProfile() {
  closePopup(popupEdit);
}

function closeAddProfile() {
  closePopup(popupAdd);
}

function closeImageProfile() {
  closePopup(popupTypeImage);
}

const openPopup = (modalWindow) => {
  modalWindow.classList.add("popup_active");
  document.addEventListener("keyup", handleEscKey);
  document.addEventListener("click", clickOnInvisibleOverlay);
};

const closePopup = (modalWindow) => {
  modalWindow.classList.remove("popup_active");
  document.removeEventListener("keyup", handleEscKey);
  document.removeEventListener("click", clickOnInvisibleOverlay);
};

function activateEditModal() {
  openPopup(popupEdit);
  editProfile();
}

function activateAddModal() {
  openPopup(popupAdd);
}

function activateImageModal() {
  openPopup(popupTypeImage);
}

const resetForm = evt => {
  evt.preventDefault();
  form.reset();
}

//Event listeners//

editButton.addEventListener(`click`, activateEditModal);
addButton.addEventListener(`click`, activateAddModal);
modalEditClose.addEventListener(`click`, closeEditProfile);
modalAddClose.addEventListener(`click`, closeAddProfile);
modalImageClose.addEventListener(`click`, closeImageProfile);
editForm.addEventListener(`submit`, saveProfile);
addForm.addEventListener(`submit`, saveAddCard);