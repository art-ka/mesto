import { Card } from './Cards.js';
import { initialCards } from './initialCards.js';
import { popupToggle } from './popup.js';
import { FormValidator } from './FormValidator.js';
import { params } from './config.js';

const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close_type_editform');
const popupEdit = document.querySelector('.popup_type_edit');

const popupOpenAddButton = document.querySelector('.profile__add-button');
const popupCloseAddButton = document.querySelector('.popup__close_type_addform');
const popupAdd = document.querySelector('.popup_type_add');

const popupCloseImg = document.querySelector('.popup__close_type_img');
const popupWithImage = document.querySelector('.popup_type_img');

const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__caption');

const titleInput = document.querySelector('.popup__field_input_title');
const imageInput = document.querySelector('.popup__field_input_url');


initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, popupWithImage, popupImage, popupTitle, '#elements');
    const cardElement = card.generateCard();

    document.querySelector('.element').append(cardElement);
});

const addCard = (event) => {
    event.preventDefault();
    const card = new Card(titleInput.value, imageInput.value, popupWithImage, popupImage, popupTitle, '#elements');
    const cardElement = card.generateCard();

    popupToggle(popupAdd);

    document.querySelector('.element').prepend(cardElement);
}

const formAddElement = document.querySelector('.popup__form_add_js');
formAddElement.addEventListener('submit', addCard);

popupOpenButton.addEventListener('click', (evt) => popupToggle(popupEdit));
popupCloseButton.addEventListener('click', (evt) => popupToggle(popupEdit));

const formAddValidator = new FormValidator(params.formAdd, params);
    formAddValidator.enableValidation();

const formEditValidator = new FormValidator(params.formEdit, params);
    formEditValidator.enableValidation();

popupOpenAddButton.addEventListener('click', (evt) => {
    popupToggle(popupAdd);

    titleInput.value = "";
    imageInput.value = "";

    const inputList = Array.from(popupAdd.querySelectorAll('.popup__field'));
    const buttonElement = popupAdd.querySelector('.popup__submit-button');

    formAddValidator._toggleButtonState(inputList, buttonElement);
});

popupCloseAddButton.addEventListener('click', (evt) => popupToggle(popupAdd));

popupCloseImg.addEventListener('click', (evt) => popupToggle(popupWithImage));

const formEditProfile = popupEdit.querySelector('.popup__form');

const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');

const nameInput = formEditProfile.querySelector('.popup__field_input_name');
const jobInput = formEditProfile.querySelector('.popup__field_input_job');

function fillForm() {

    const nameProfile = title.textContent;
    const jobProfile = subtitle.textContent;

    nameInput.value = nameProfile;
    jobInput.value = jobProfile;
}

popupOpenButton.addEventListener('click', fillForm);

function formEditSubmitHandler(evt) {
    evt.preventDefault();

    const name = nameInput.value;
    const job = jobInput.value;

    title.textContent = name;
    subtitle.textContent = job;

    popupToggle(popupEdit);
}

formEditProfile.addEventListener('submit', formEditSubmitHandler);

const popupCloseByClickOnOverlay = (event) => {

    if (event.target !== event.currentTarget) {
        return;
    }

    popupToggle(event.target);
}

popupEdit.addEventListener('click', popupCloseByClickOnOverlay);
popupAdd.addEventListener('click', popupCloseByClickOnOverlay);
popupWithImage.addEventListener('click', popupCloseByClickOnOverlay);
