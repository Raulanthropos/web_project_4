//Variable declarations//
const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
const popupImage = document.querySelector(".popup_type_image");
const editButton = document.querySelector(".profile__container-icon");
const addButton = document.querySelector(".profile__add-btn");
const modalEditClose = document.querySelector(".modal__form-close_type_edit");
const modalAddClose = document.querySelector(".modal__form-close_type_add");
const inputs = document.querySelectorAll(`.modal__form-element`);
const title = document.querySelector(`.profile__title`);
const aboutMe = document.querySelector(`.profile__subtitle`);
const nameInput = document.querySelector(`.modal__form-element_input_title`);
const jobInput = document.querySelector(`.modal__form-element_input_subtitle`);
const editForm = document.querySelector(`.modal__form`);
const cardList = document.querySelector(`.elements__list`);
const profile = {
  name: title.textContent,
  about: aboutMe.textContent,
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

function createCard(card) {
  const cardTemplate = document
    .querySelector(`#element-template`)
    .content.querySelector(`.elements__card`);
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(`.elements__card-img`);
  const cardTitle = cardElement.querySelector(`.elements__card-title`);
  const cardLikeButton = cardElement.querySelector(`.elements__card-like`);
  const deleteButton = cardElement.querySelector(".elements__trash-btn");

  cardTitle.textContent = card.name;
  cardImage.src = card.link;
   
  deleteButton.addEventListener("click", (evt) => {
    const listItem = deleteButton.closest(".elements__card");
    listItem.remove();
  });

  cardImage.addEventListener(`click`, () => {
    const popupImage = document.querySelector(".popup__image");
    const popupImageTitle = document.querySelector(`.popup__image-caption`);

    popupImage.src = card.link;
    popupImageTitle.textContent = card.name;

    activateImageModal(imageModalWindow);
  })

  return cardElement;
}

const imageModalWindow = document.querySelector(`.popup__image`);

{/* <div class="popup popup_type_image">
<div class="modal">
  <button type="button" class="modal__form-close modal__form-close_type_add" aria-label="close-form-button"></button>
  <figure class="popup__figure">
    <img class="popup__image" src="" alt="">
    <figcaption class="popup__image-caption"></figcaption>
  </figure>
</div>
</div> */}

function renderCard(card, wrapper) {
  wrapper.append(createCard(card));
}

initialCards.forEach((card) => {
  renderCard(card, cardList);
});

function editProfile() {
  nameInput.value = profile.name;
  jobInput.value = profile.about;
}

function closeEditProfile() {
  popupEdit.classList.remove("popup_active");
}

function closeAddProfile() {
  popupAdd.classList.remove("popup_active");
}

function saveProfile(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  closeEditProfile();
}

function activateEditModal() {
  popupEdit.classList.add("popup_active");
  editProfile();
}

function activateAddModal() {
  popupAdd.classList.add("popup_active");
}

function activateImageModal() {
  popupImage.classList.add("popup_active");
}

//Event listeners//

editButton.addEventListener(`click`, activateEditModal);
addButton.addEventListener(`click`, activateAddModal);
modalEditClose.addEventListener(`click`, closeEditProfile);
modalAddClose.addEventListener(`click`, closeAddProfile);
editForm.addEventListener(`submit`, saveProfile);
