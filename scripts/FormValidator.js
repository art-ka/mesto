
const showInputError = (params, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.classList.add(params.errorClass);
    errorElement.textContent = errorMessage;
};

const hideInputError = (params, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(params.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (params, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(params, formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(params, formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid);
};

const toggleButtonState = (params, inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(params.inactiveButtonClass);
        buttonElement.setAttribute("disabled", true);
    } else {
        buttonElement.classList.remove(params.inactiveButtonClass);
        buttonElement.removeAttribute("disabled");
    }
};

const setEventListeners = (params, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
    const buttonElement = formElement.querySelector(params.submitButtonSelector);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(params, formElement, inputElement);
            toggleButtonState(params, inputList, buttonElement);
        });
    });
}

//new 
//class enableValidation {}




//new

const enableValidation = (params) => {
    const formList = Array.from(document.querySelectorAll(params.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(params, formElement);
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button-disabled',
    inputErrorClass: 'popup__field-error',
    errorClass: 'popup__field-error-active'
});
