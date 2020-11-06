import { Card } from '../components/Card.js';
import { initialCards, params, popupAdd, addCardButton, profileEditButton } from '../utils/constant.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import './index.css';

const userInfo = new UserInfo();

const generateCardTemplate = () => document
    .querySelector("#elements")
    .content
    .querySelector('.element__cards')
    .cloneNode(true);

const popupImage = new PopupWithImage('.popup_type_img');
popupImage.setEventListeners();

const handleCardClick = ({ name, link }) => {
    popupImage.open(name, link);
};

const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item.name, item.link, generateCardTemplate(), handleCardClick);

        const cardElement = card.generateCard();

        cardsList.addItem(cardElement);
    }
},
    '.element'
);

cardsList.renderItems();

const getCardElement = ({ name, link }) => {
    const card = new Card(name, link, generateCardTemplate(), handleCardClick);
    return card.generateCard();
}

const formAdd = new PopupWithForm({
    popupSelector: '.popup_type_add',
    handleFormSubmit: (inputValues) => {
        cardsList.addItem({ name: inputValues.title, link: inputValues.picture });
        formAdd.close();
    }
});

formAdd.setEventListeners(formEdit);

addCardButton.addEventListener('click', () => {
    formAdd.open();

    const inputList = Array.from(popupAdd.querySelectorAll('.popup__field'));
    const buttonElement = popupAdd.querySelector('.popup__submit-button');

    formAddValidator.toggleButtonState(inputList, buttonElement);
});

const formEdit = new PopupWithForm({
    popupSelector: '.popup_type_edit',
    handleFormSubmit: (inputsValues) => {
        userInfo.setUserInfo({ name: inputsValues.fullname, job: inputsValues.job });
        formEdit.close();
    }

});

profileEditButton.addEventListener('click', () => {
    const profile = userInfo.getUserInfo();
    const inputsName = document.querySelector('.popup__field_input_name');
    const inputsJob = document.querySelector('.popup__field_input_job');

    inputsName.value = profile.name;
    inputsJob.value = profile.jobInput;

    formEdit.open();
});

formEdit.setEventListeners();

const formAddValidator = new FormValidator(params, params.formAdd);
formAddValidator.enableValidation();

const formEditValidator = new FormValidator(params, params.formEdit);
formEditValidator.enableValidation();


