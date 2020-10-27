import { Popup } from './Popup.js';
import { popupImage, popupTitle, popupClose } from '../utils/constant.js';

export class PopupWithImage extends Popup {
    constructor({name, link}, popupSelector) {
        super(popupSelector);
        this._name = name;
        this._link = link;
    }

    open() {
        super.open();
        popupImage.src = this._link;
        popupTitle.textContent = this._name;
    }
}