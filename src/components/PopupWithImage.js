import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector, popupImage, popupTitle) {
        super(popupSelector);
        this._popupImage = document.querySelector(popupImage);
        this._popupTitle = document.querySelector(popupTitle);
    }

    open(name, link) {
        this._popupImage.src = link;
        this._popupTitle.textContent = name;
        super.open();
    }
}