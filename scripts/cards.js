import { popupToggle, popupCloseByEsc } from './popup.js';

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export class Card {
    constructor(name, link, templateId) {
        this._name = name;
        this._link = link;
        this._templateId = templateId;
    }
    
    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateId)
        .content
        .querySelector('.element__cards')
        .cloneNode(true);
    
        return cardElement;
    }
    
    generateCard() {
        this._element = this._getTemplate();
        
        this._setEventListeners();
        
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        
        return this._element;
    }
    _handleDeleteCard() {
        this._element.remove();
    }
    _setEventListeners() {
        this._element
            .querySelector('.element__delete-button')
            .addEventListener('click', () => {
                this._handleDeleteCard();
            });

        this._element
            .querySelector('.element__like-image')
            .addEventListener('click', event => {
                event.target.classList.toggle('element__like-image-active');
            });


}
}