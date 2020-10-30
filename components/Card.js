export class Card {
    constructor(name, link, template, handleCardClick) {
        this._name = name;
        this._link = link;
        this._template = template;
        this._handleCardClick = handleCardClick;
        //this._popup = popup;
        //this._popupImage = popupImage;
        //this._popupTitle = popupTitle;
    }

    generateCard() {
        this._element = this._template;
        this._image = this._element.querySelector('.element__image');
        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        this._setEventListeners();

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

        this._image
            .addEventListener('click',  () =>  this._handleCardClick(this));

/*
        this._image
            .addEventListener('click', event => {
                this._popupImage.src = this._link;
                this._popupTitle.textContent = this._name;
                popupToggle(this._popup);
            }); */
    }
} 