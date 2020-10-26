import { Popup } from './Popup.js';
import { popupImage, popupTitle } from '../utils/constant.js';

export class PopupWithImage extends Popup {
    constructor({name, link}, popupSelector) {
        super(popupSelector);
        this._name = name;
        this._link = link;
    }
//нужно вставлять в попап картинку и атрибут src изображения и подпись к картинке.
    open() {
        super.open();
        popupImage.src = this._link;
        popupTitle.textContent = this._name;
    }
}