import { Card } from '../components/Card.js';
import { params, popupAdd, addCardButton, profileEditButton, inputsName, inputsJob, inputsAvatar, profileAvatarButton } from '../utils/constant.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import './index.css';


const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17',
    headers: {
        authorization: 'ef890c66-d7a0-4a1d-a482-7b78f3f64350',
        'Content-Type': 'application/json'
    }
});







const userInfo = new UserInfo();

const generateCardTemplate = () => document
    .querySelector("#elements")
    .content
    .querySelector('.element__cards')
    .cloneNode(true);

const popupImage = new PopupWithImage('.popup_type_img', '.popup__image', '.popup__caption');
popupImage.setEventListeners();


const cardsList = new Section({
    items: getCardElement,
    renderer: (item) => {
        const cardElement = new Card({ name: item.name, link: item.link }, generateCardTemplate(), {
            handleCardClick: ({ name, link }) => {
                popupImage.open(name, link);
            }
        })

        cardsList.addItem(cardElement.generateCard());
    }
},
    '.element'
)


const getCardElement = api.getInitialCards().then((data) => {
    const name = data.map(item => item.name);
    const link = data.map(item => item.link);

    cardsList.renderItems(data);

});

const formAdd = new PopupWithForm({
    popupSelector: '.popup_type_add',
    handleFormSubmit: (data) => {
        api.addCard().then((data) => data);
        const cardElement = new Card({ name: data.title, link: data.picture }, generateCardTemplate(), {
            handleCardClick: ({ name, link }) => {
                popupImage.open(name, link);
            }
        })

        cardsList.addItem(cardElement.generateCard());
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

    inputsName.value = profile.name;
    inputsJob.value = profile.jobInput;

    formEdit.open();
});

formEdit.setEventListeners();

const formAvatar = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    handleFormSubmit: (inputsValues) => {
        userInfo.setAvatar({ avatar: inputsValues.avatar });
        formAvatar.close();
    }
});

profileAvatarButton.addEventListener('click', () => {
    const avatar = document.querySelector('.profile__avatar');

    inputsAvatar.value = avatar.src;

    formAvatar.open();
});

formAvatar.setEventListeners();




const formAddValidator = new FormValidator(params, params.formAdd);
formAddValidator.enableValidation();

const formEditValidator = new FormValidator(params, params.formEdit);
formEditValidator.enableValidation();

