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

export const params = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    formAdd: '.popup_type_add',
    formEdit: '.popup_type_edit',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button-disabled',
    inputErrorClass: 'popup__field-error',
    errorClass: 'popup__field-error-active'
}

//export const popupCloseButton = document.querySelector('.popup__close');

export const popupImage = document.querySelector('.popup__image');
export const popupTitle = document.querySelector('.popup__caption');

export const popupImg = document.querySelector('.popup_type_img');
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');

export const popupSubmitAddFormButton = document.querySelector('.popup__submit-button');

export const profileEditButton = document.querySelector('.profile__edit-button');
export const addCardButton = document.querySelector('.profile__add-button');