import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({ popupSelector, popupField, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupField = document.querySelectorAll(popupField);
    }

    _getInputValues() {
        const userInputs = document.querySelectorAll('.popup__field');
        this._inputValues = {};
        userInputs.forEach((item) => {
            this._inputValues[item.name] = item.value;
        });
        return this._inputValues;
    }

    close() {
        super.close();
        document.querySelectorAll('.popup__form').forEach((form) => form.reset());
    }

    open() {
        super.open();
    }

    setEventListeners(popup) {
        super.setEventListeners(popup);
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }
}


