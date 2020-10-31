import { Card } from '../components/Card.js';
import { initialCards, params, popupEdit, popupAdd, addCardButton, profileEditButton } from '../utils/constant.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';


//const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close_type_editform');
//const popupEdit = document.querySelector('.popup_type_edit');

//const popup = document.querySelector('.popup');

//const popupOpenAddButton = document.querySelector('.profile__add-button');
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

const userInfo = new UserInfo();

const generateCardTemplate = () => document
    .querySelector("#elements")
    .content
    .querySelector('.element__cards')
    .cloneNode(true);


//const elImage = document.querySelector('.element__image');


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

//пробы

const formAdd = new PopupWithForm({
    popupSelector: '.popup_type_add',
    popupField: '.popup__field',
    handleFormSubmit: (inputValues) => {
        cardsList._renderer({ name: inputValues.title, link: inputValues.picture })
        formAdd.close();
    }
});

addCardButton.addEventListener('click', () => {
    formAdd.open();

    const inputList = Array.from(popupAdd.querySelectorAll('.popup__field'));
    const buttonElement = popupAdd.querySelector('.popup__submit-button');

    formAddValidator.toggleButtonState(inputList, buttonElement);
});

const formEdit = new PopupWithForm({
    popupSelector: '.popup_type_edit',
    popupField: '.popup__field',
    handleFormSubmit: (inputsValues) => {
        userInfo.setUserInfo({name: inputsValues.fullname, job: inputsValues.job});
        formEdit.close();
    }

});

profileEditButton.addEventListener('click', () => {
    const profile = userInfo.getUserInfo();

    formEdit._popupField[0].value = profile.name;
    formEdit._popupField[1].value = profile.jobInput;

    formEdit.open();
});


const formAddValidator = new FormValidator(params, params.formAdd);
formAddValidator.enableValidation();

const formEditValidator = new FormValidator(params, params.formEdit);
formEditValidator.enableValidation();


