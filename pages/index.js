import { Card } from '../components/Card.js';
import { initialCards, params, popupEdit, popupAdd } from '../utils/constant.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';


const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close_type_editform');
//const popupEdit = document.querySelector('.popup_type_edit');

const popupOpenAddButton = document.querySelector('.profile__add-button');
const popupCloseAddButton = document.querySelector('.popup__close_type_addform');
//const popupAdd = document.querySelector('.popup_type_add');

const popupCloseImg = document.querySelector('.popup__close_type_img');
//const popupWithImage = document.querySelector('.popup_type_img');

const titleInput = document.querySelector('.popup__field_input_title');
const imageInput = document.querySelector('.popup__field_input_url');

const elementList = document.querySelector('.element');

const formEditProfile = popupEdit.querySelector('.popup__form');

const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');

const nameInput = formEditProfile.querySelector('.popup__field_input_name');
const jobInput = formEditProfile.querySelector('.popup__field_input_job');

const generateCardTemplate = () => document
    .querySelector("#elements")
    .content
    .querySelector('.element__cards')
    .cloneNode(true);


const elImage = document.querySelector('.element__image');


const handleCardClick = (card) => {
    const popupImage = new PopupWithImage({ name: card._name, link: card._link }, '.popup_type_img');
    popupImage.open();
};

const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item.name, item.link, generateCardTemplate(), handleCardClick);

        const cardElement = card.generateCard();

        cardsList.addItem(cardElement);

        handleCardClick.bind(item);
    }
},
    '.element'
);

cardsList.renderItems();








const createCard = (title, link) => {
    const card = new Card(title, link, generateCardTemplate());
    const cardElement = card.generateCard();
    return cardElement;
}
/*
initialCards.forEach((item) => {
    const cardElement = createCard(item.name, item.link);
    elementList.append(cardElement);
});

const addCard = (event) => {
    const cardElement = createCard(titleInput.value, imageInput.value);
    elementList.prepend(cardElement);
    popupToggle(popupAdd);
}
*/

const formAddElement = document.querySelector('.popup__form_add_js');
//formAddElement.addEventListener('submit', addCard);


popupOpenButton.addEventListener('click', (evt) => open(popupEdit));
//popupCloseButton.addEventListener('click', (evt) => popupToggle(popupEdit));

const formAddValidator = new FormValidator(params, params.formAdd);
formAddValidator.enableValidation();

const formEditValidator = new FormValidator(params, params.formEdit);
formEditValidator.enableValidation();

popupOpenAddButton.addEventListener('click', (evt) => {
    open(popupAdd);

    titleInput.value = "";
    imageInput.value = "";

    const inputList = Array.from(popupAdd.querySelectorAll('.popup__field'));
    const buttonElement = popupAdd.querySelector('.popup__submit-button');

    formAddValidator.toggleButtonState(inputList, buttonElement);
});

//popupCloseAddButton.addEventListener('click', (evt) => popupToggle(popupAdd));

//popupCloseImg.addEventListener('click', (evt) => popupToggle(popupWithImage));

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

    open(popupEdit);
}

formEditProfile.addEventListener('submit', formEditSubmitHandler);

/*
const popupCloseByClickOnOverlay = (event) => {

    if (event.target !== event.currentTarget) {
        return;
    }

    close(event.target);
}

popupEdit.addEventListener('click', popupCloseByClickOnOverlay);
popupAdd.addEventListener('click', popupCloseByClickOnOverlay);
popupWithImage.addEventListener('click', popupCloseByClickOnOverlay);
*/