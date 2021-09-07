const showInputError = (inputElement, formElement, settings) => {
  const errorSpan = formElement.querySelector('#' + inputElement.id + '-error')
  errorSpan.textContent = inputElement.validationMessage;
  inputElement.classList.add(settings.inputErrorClass);
  errorSpan.classList.add(settings.errorClass);
}

const hideInputError = (inputElement, formElement, settings) => {
  const errorSpan = formElement.querySelector('#' + inputElement.id + '-error')
  errorSpan.textContent = '';
  inputElement.classList.remove(settings.inputErrorClass);
  errorSpan.classList.remove(settings.errorClass)
}

const checkInputValidity = (inputElement, formElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, formElement, settings);
  } else {
    hideInputError(inputElement, formElement, settings);
  }
}
const hasInvalidInput = (inputElements) => {
  return !inputElements.every(inputEl => {
    return inputEl.validity.valid === true;
  })
}

const toggleButtonState = (inputElements, submitButton, {inactiveButtonClass}) => {
  if (hasInvalidInput(inputElements)) {
    submitButton.disabled = true;
    submitButton.classList.add(inactiveButtonClass);
  } else {
    submitButton.disabled = false;
    submitButton.classList.remove(inactiveButtonClass);
  }
}

const setEventListeners = (formElement, settings) => {
    const submitButton = formElement.querySelector(settings.submitButtonSelector);
    const inputElements = [...formElement.querySelectorAll(settings.inputSelector)];
    inputElements.forEach( inputElement => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(inputElement, formElement, settings);
        toggleButtonState(inputElements, submitButton, settings);
      });
    });
};

const enableValidation = settings => {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  formElements.forEach (form => {
    form.addEventListener('submit', (evt) => evt.preventDefault());
    setEventListeners(form, settings);
  });
}



enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__form-element",
  submitButtonSelector: ".modal__btn",
  inactiveButtonClass: "modal__btn_disabled",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_visible",
});