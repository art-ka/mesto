export class Card {
    constructor({ name, link, likes, ownerId, id, userId }, template, { handleCardClick, handleDeleteClick, handleLikeClick }) {
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._id = id;
        this._ownerId = ownerId;
        this._userId = userId;
        this._template = template;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
    }

    generateCard() {
        this._element = this._template;
        this._image = this._element.querySelector('.element__image');
        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._likesCount = this._element.querySelector('.element__likes');
        this._likeButton = this._element.querySelector('.element__like-image');
        if (this._likes && this._likes.length > 0) {
            this._likesCount.textContent = this._likes.length;
//отображение активного элемента лайк после перезагрузки страницы
            if (this._likes.find((like) => like._id === this._userId)) {
                this._likeButton.classList.add('element__like-image-active');
            }
        }
        
        this._displayDeleteButton();
        this._setEventListeners();

        return this._element;
    }

    handleDeleteCard() {
        this._element.remove();
    }

    getId() {
        return this._id;
    }

    isLiked() {
        return this._likeButton.classList.contains('element__like-image-active');
    }

    updateLikes(likes) {
        this._likes = likes;
    }

    likeCountPlus() {
        this._likeButton.classList.add('element__like-image-active');
        const currentValue = +this._likesCount.textContent;
        this._likesCount.textContent = currentValue + 1;
    }

    likeCountMinus() {
        this._likeButton.classList.remove('element__like-image-active');
        const currentValue = this._likesCount.textContent;
        this._likesCount.textContent = currentValue - 1;
    }

    _displayDeleteButton() {
        const deleteButton = this._element.querySelector('.element__delete-button');
        deleteButton.hidden = this._ownerId !== this._userId;
    }

    _setEventListeners() {
        this._likeButton
            .addEventListener("click", () => this._handleLikeClick());

        this._image
            .addEventListener('click', () => this._handleCardClick({ name: this._name, link: this._link }));

        this._element
            .querySelector('.element__delete-button')
            .addEventListener('click', () => this._handleDeleteClick());

    }

}