export class Card {
    constructor({ name, link, likes, id }, template, { handleCardClick, handleDeleteClick, handleLikeClick }) {
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._id = id;
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
        if (this._likes && this._likes.length > 0) {
            this._element.querySelector('.element__likes').innerHTML = this._likes.length;
//отображение активного элемента лайк после перезагрузки страницы
            if (this._likes.find((like) => like._id === "60e4f7e724f8da16d92e91c2")) {
                this._element
                    .querySelector('.element__like-image').classList.add('element__like-image-active');
            }
        }

        this._displayDeleteButton();
        this._setEventListeners();

        return this._element;
    }

    handleDeleteCard() {
        this._element.remove();
    }

    isLiked() {
        return this._element.querySelector('.element__like-image').classList.contains('element__like-image-active');
    }

    updateLikes(likes) {
        this._likes = likes;
    }

    likeCountPlus() {
        this._element
            .querySelector('.element__like-image').classList.add('element__like-image-active');
        const currentValue = +this._element.querySelector('.element__likes').innerHTML;
        this._element.querySelector('.element__likes').innerHTML = currentValue + 1;
    }

    likeCountMinus() {
        this._element
            .querySelector('.element__like-image').classList.remove('element__like-image-active');
        const currentValue = this._element.querySelector('.element__likes').innerHTML;
        this._element.querySelector('.element__likes').innerHTML = currentValue - 1;
    }

    _displayDeleteButton() {
        const deleteButton = this._element.querySelector('.element__delete-button')
        deleteButton.hidden = this._id !== "60e4f7e724f8da16d92e91c2";
    }

    _setEventListeners() {
        this._element
            .querySelector('.element__like-image')
            .addEventListener("click", () => this._handleLikeClick());

        this._image
            .addEventListener('click', () => this._handleCardClick({ name: this._name, link: this._link }));

        this._element
            .querySelector('.element__delete-button')
            .addEventListener('click', () => this._handleDeleteClick());

    }

}