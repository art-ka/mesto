export class Card {
    constructor({ name, link, likes, id }, template, { handleCardClick, handleDeleteClick }) {
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._id = id;
        this._template = template;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
    }

    generateCard() {
        this._element = this._template;
        this._image = this._element.querySelector('.element__image');
        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        if (this._likes && this._likes.length > 0)
            this._element.querySelector('.element__likes').innerHTML = this._likes.length;
        this._displayDeleteButton();


        this._setEventListeners();

        return this._element;
    }

    handleDeleteCard() {
        this._element.remove();
    }

    _displayDeleteButton() {
        const deleteButton = this._element.querySelector('.element__delete-button')
        deleteButton.hidden = this._id !== "60e4f7e724f8da16d92e91c2";
    }

    _setEventListeners() {
        this._element
            .querySelector('.element__like-image')
            .addEventListener('click', event => {
                event.target.classList.toggle('element__like-image-active');
                // каунтер счетчика прибавил единицу

                let like = true,
                    likeCount = document.querySelector('.element__likes').innerHTML;

                likeCount = like ? ++likeCount : --likeCount;
                like = !like;
                document.querySelector('.element__likes').innerHTML = likeCount;

            });

        this._image
            .addEventListener('click', () => this._handleCardClick({ name: this._name, link: this._link }));

        this._element
            .querySelector('.element__delete-button')
            .addEventListener('click', () => this._handleDeleteClick());

    }

}