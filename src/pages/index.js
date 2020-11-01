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
        userInfo.setUserInfo({ name: inputsValues.fullname, job: inputsValues.job });
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


