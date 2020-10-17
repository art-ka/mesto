import { params } from './config.js';

class FormValidator {
    constructor(formSelector, params) {
        this._formSelector = formSelector;
        this._inputSelector = params.inputSelector;
        this._submitButtonSelector = params.submitButtonSelector;
        this._inactiveButtonClass = params.inactiveButtonClass;
        this._inputErrorClass = params.inputErrorClass;
        this._errorClass = params.errorClass;
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);

        errorElement.classList.add(this._errorClass);
        errorElement.textContent = errorMessage;
    };

    _hideInputError(inputElement) {
        const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);

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
        const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
        const buttonElement = this._formSelector.querySelector(this._submitButtonSelector);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    }

    enableValidation = () => {
        const formList = Array.from(document.querySelectorAll(params.formSelector));
        formList.forEach((formElement) => {
            formElement.addEventListener('submit', function (evt) {
                evt.preventDefault();
            });
            setEventListeners(params, formElement);
        });
    };


}