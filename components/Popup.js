
import {popupClose} from '../utils/constant.js';

export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
    }

    close() {
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose() {
        if (this._popup.classList.contains('popup_opened')) {
            document.addEventListener('keydown', popupCloseByEsc = (evt) => {
                if (evt.key === 'Escape') {
                    const popupOpen = document.querySelector('.popup_opened');
                    this._close(popupOpen);
                }
            });
        } else {
            document.removeEventListener('keydown', popupCloseByEsc = (evt) => {
                if (evt.key === 'Escape') {
                    const popupOpen = document.querySelector('.popup_opened');
                    this._close(popupOpen);
                }
            });
        }
    }
//слушатель клика иконке закрытия попапа
    setEventListeners() {
        popupClose.addEventListener('click', (evt) => this._close(this._popup));
    }
}