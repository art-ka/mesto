export class FormValidator {
    constructor(formSelector, params) {
        this._formSelector = formSelector;
        this._formElement = document.querySelector(formSelector);
        this._inputSelector = params.inputSelector;
        this._submitButtonSelector = params.submitButtonSelector;
        this._inactiveButtonClass = params.inactiveButtonClass;
        this._inputErrorClass = params.inputErrorClass;
        this._errorClass = params.errorClass;
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

        errorElement.classList.add(this._errorClass);
        errorElement.textContent = errorMessage;
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

        inputElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => !inputElement.validity.valid);
    };

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.setAttribute("disabled", true);
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.removeAttribute("disabled");
        }
    };

    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    }

    enableValidation = () => {
        const submitFormHandler = (event) => {
            event.preventDefault();
        };
        this._formElement.addEventListener("submit", submitFormHandler);

        this._setEventListeners(this._formElement, this._params);
    };
}