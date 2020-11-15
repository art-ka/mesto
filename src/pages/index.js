import { Card } from '../components/Card.js';
import {
    params, popupAdd, addCardButton, profileEditButton, inputsName, inputsJob,
    inputsAvatar, profileAvatarButton, inputsTitle, inputsUrl, avatar
} from '../utils/constant.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { PopupWithButton } from '../components/PopupWithButton.js';
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
        const cardElement = new Card({ name: item.name, link: item.link, likes: item.likes, id: item.owner._id }, generateCardTemplate(), {
            handleCardClick: ({ name, link }) => {
                popupImage.open(name, link);
            },
            handleDeleteClick: () => {
                popupDelete.open(() => {
                    api.deleteCard(item._id).then(() => cardElement.handleDeleteCard());
                    popupDelete.close();
                });
            },
            handleLikeClick: () => {
                if (cardElement.isLiked()) {
                    api.deleteLikeCard(item._id).then(() => cardElement.likeCountMinus());
                } else {
                    api.likeCard(item._id).then(() => cardElement.likeCountPlus());
                }
            }
        });

        cardsList.addItem(cardElement.generateCard());
    }
},
    '.element'
)

const getCardElement = api.getInitialCards().then((data) => {
    cardsList.renderItems(data);
});


const popupDelete = new PopupWithButton('.popup_type_delete');
popupDelete.setEventListeners();

const formAdd = new PopupWithForm({
    popupSelector: '.popup_type_add',
    handleFormSubmit: () => {
        const inputTitle = inputsTitle.value;
        const inputUrl = inputsUrl.value;

        api.addCard(inputTitle, inputUrl).then((item) => {
            const cardElement = new Card({ name: item.name, link: item.link, id: item.owner._id }, generateCardTemplate(), {
                handleCardClick: ({ name, link }) => {
                    popupImage.open(name, link);
                },
                handleDeleteClick: () => {
                    popupDelete.open(() => {
                        api.deleteCard(item._id).then(() => cardElement.handleDeleteCard());
                        popupDelete.close();
                    });
                },
                handleLikeClick: () => {
                    if (cardElement.isLiked()) {
                        api.deleteLikeCard(item._id).then(() => cardElement.likeCountMinus());
                    } else {
                        api.likeCard(item._id).then(() => cardElement.likeCountPlus());
                    }
                }
            });
            cardsList.addItem(cardElement.generateCard());
            formAdd.close();
        });
    },
});

formAdd.setEventListeners();

addCardButton.addEventListener('click', () => {
    formAdd.open();

    const inputList = Array.from(popupAdd.querySelectorAll('.popup__field'));
    const buttonElement = popupAdd.querySelector('.popup__submit-button');

    formAddValidator.toggleButtonState(inputList, buttonElement);
});

const formEdit = new PopupWithForm({
    popupSelector: '.popup_type_edit',
    handleFormSubmit: (data) => {
        const inputName = inputsName.value;
        const inputAbout = inputsJob.value; 

        api.editInfo(inputName, inputAbout).then((data) => data);
        userInfo.setUserInfo({ name: data.fullname, about: data.job });
        formEdit.close();
    }
});


function putProfileInfo() {
    api.takeUserInfo().then((data) => {
        userInfo.setUserInfo({ name: data.name, about: data.about, avatar: data.avatar });
    });
}

putProfileInfo();


profileEditButton.addEventListener('click', () => {
    const profile = userInfo.getUserInfo();

    inputsName.value = profile.name;
    inputsJob.value = profile.about;

    formEdit.open();
});

formEdit.setEventListeners();

const formAvatar = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    handleFormSubmit: (data) => {
        const inputAvatar = inputsAvatar.value;

        api.changeAvatar(inputAvatar).then((data) => data);
        userInfo.setAvatar({ avatar: data.avatar });
        formAvatar.close();
    }
});

profileAvatarButton.addEventListener('click', () => {
    inputsAvatar.value = avatar.src;

    formAvatar.open();
});

formAvatar.setEventListeners();


const formAddValidator = new FormValidator(params, params.formAdd);
formAddValidator.enableValidation();

const formEditValidator = new FormValidator(params, params.formEdit);
formEditValidator.enableValidation();

