import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link) {
        this._popupImage = document.querySelector('.popup__image');
        this._popupTitle = document.querySelector('.popup__caption');
        this._popupImage.src = link;
        this._popupTitle = name;
        super.open();
    }
}