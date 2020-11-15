import { Popup } from './Popup.js';

export class PopupWithButton extends Popup {
    open(confirmCb) {
        super.open();
        this._confirmCb = confirmCb;
    }

    setEventListeners() {
        super.setEventListeners();
        const confirmButton = document.querySelector('.popup__submit-button-delete'); 
        confirmButton.addEventListener('click', () => {
            this._confirmCb();
        })
    }
}