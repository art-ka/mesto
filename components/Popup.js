
import { popupClose, popupImg, popupEdit, popupAdd } from '../utils/constant.js';

export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        this.setEventListeners(this);
    }

    close() {
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose() {
        if (this._popup.classList.contains('popup_opened')) {
            document.addEventListener('keydown', (evt) => {
                if (evt.key === 'Escape') {
                    const popupOpen = document.querySelector('.popup_opened');
                    this.close();
                }
            });
        } else {
            document.removeEventListener('keydown', (evt) => {
                if (evt.key === 'Escape') {
                    const popupOpen = document.querySelector('.popup_opened');
                    this.close();
                }
            });
        }
    }
    _popupCloseByClickOnOverlay(popup) {
        popup.close();
    }

    setEventListeners(popup) {
        popupClose.addEventListener('click', () => this.close(popup));
        popupEdit.addEventListener('click', () => this._popupCloseByClickOnOverlay(popup));
        popupAdd.addEventListener('click', () => this._popupCloseByClickOnOverlay(popup));
        popupImg.addEventListener('click', () => this._popupCloseByClickOnOverlay(popup));
        document.addEventListener('keydown', () => this._handleEscClose(popup));
    }
}










