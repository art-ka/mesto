import { Popup } from './Popup.js';
import { popupSubmitAddFormButton } from '../utils/constant.js';

export class PopupWithForm extends Popup {
    constructor({ popupSelector, popupField, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupField = document.querySelectorAll(popupField);
    }
    //собирает данные всех полей формы
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
        //сброс формы 
        document.querySelectorAll('.popup__form').forEach((form)=>form.reset());
    }

    open() {
        super.open();
    }

    setEventListeners(popup) {
        super.setEventListeners(popup);
        //обработчик сабмита формы
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })

        /*
                document
                    .querySelector('.profile__add-button')
                    .addEventListener('click', () => this._open('.popup_type_add')); */
    }
}


