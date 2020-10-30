
export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this.setEventListeners(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
    }

    close() {
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose() {
        if (this._popup.classList.contains('popup_opened')) {
            document.addEventListener('keydown', (evt) => {
                if (evt.key === 'Escape') {
                    const popupOpen = document.querySelector('.popup_opened');
                    this.close();
                }
            });
        } else {
            document.removeEventListener('keydown', (evt) => {
                if (evt.key === 'Escape') {
                    const popupOpen = document.querySelector('.popup_opened');
                    this.close();
                }
            });
        }
    }
    _popupCloseByClickOnOverlay(popup) {
        popup.close();
    }

    setEventListeners(popup) {
        const popupCloseButton = this._popup.querySelector('.popup__close');
        popupCloseButton.addEventListener('click', () => popup.close());
        //popupEdit.addEventListener('click', () => this._popupCloseByClickOnOverlay(popup));
        //popupAdd.addEventListener('click', () => this._popupCloseByClickOnOverlay(popup));
        //popupImg.addEventListener('click', () => this._popupCloseByClickOnOverlay(popup));
        document.addEventListener('keydown', () => this._handleEscClose(popup));
        //popupOpenAddButton.addEventListener('click',  () =>  handleFormClick());
        //popupOpenAddButton.addEventListener('click', (evt) => this.open.bind(popup));
        //popupOpenButton.addEventListener('click', () => popup.open('.popup_type_edit'));
    }
}
