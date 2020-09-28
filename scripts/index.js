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

function popupToggle(popup, evt) {
    const id = evt ? evt.target.getAttribute('id') : null;

    if (id) {
        popupImage.src = initialCards[id].link;
        popupTitle.innerHTML = initialCards[id].name;
    }
    popup.classList.toggle('popup_opened');

    if (popup.classList.contains('popup_opened')) {
        document.addEventListener('keydown', popupCloseByEsc);
    } else {
        document.removeEventListener('keydown', popupCloseByEsc);
    }
}

function popupCloseByEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpen = document.querySelector('.popup_opened');
        popupToggle(popupOpen);
    }
}

popupOpenButton.addEventListener('click', (evt) => popupToggle(popupEdit));
popupCloseButton.addEventListener('click', (evt) => popupToggle(popupEdit));

popupOpenAddButton.addEventListener('click', (evt) => popupToggle(popupAdd));
popupCloseAddButton.addEventListener('click', (evt) => popupToggle(popupAdd));

popupCloseImg.addEventListener('click', (evt) => popupToggle(popupWithImage));

const formElement = popupEdit.querySelector('.popup__form');

const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');

const nameInput = formElement.querySelector('.popup__field_input_name');
const jobInput = formElement.querySelector('.popup__field_input_job');

function fillForm() {

    const nameProfile = title.textContent;
    const jobProfile = subtitle.textContent;

    nameInput.value = nameProfile;
    jobInput.value = jobProfile;
}

popupOpenButton.addEventListener('click', fillForm);

function formSubmitHandler(evt) {
    evt.preventDefault();

    const name = nameInput.value;
    const job = jobInput.value;

    title.textContent = name;
    subtitle.textContent = job;

    popupToggle(popupEdit);
}

formElement.addEventListener('submit', formSubmitHandler);

const popupCloseByClickOnOverlay = (event) => {

    if (event.target !== event.currentTarget) {
        return;
    }

    popupToggle(event.target);
}

popupEdit.addEventListener('click', popupCloseByClickOnOverlay);
popupAdd.addEventListener('click', popupCloseByClickOnOverlay);
popupWithImage.addEventListener('click', popupCloseByClickOnOverlay);

const initialCards = [
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

const elementTemplate = document.querySelector('#elements').content;
const elementOnline = document.querySelector('.element');

function renderItem(cardItem, index) {
    const cardElement = elementTemplate.cloneNode(true);

    cardElement.querySelector('.element__title').innerText = cardItem.name;

    cardElement.querySelector('.element__image').src = cardItem.link;

    cardElement.querySelector('.element__image').setAttribute("id", index);

    cardElement.querySelector('.element__image').addEventListener('click', (evt) => popupToggle(popupWithImage, evt));

    cardElement.querySelector('.element__title').setAttribute("id", index);

    const deleteButton = cardElement.querySelector(".element__delete-button");

    deleteButton.setAttribute("id", index);

    deleteButton.addEventListener('click', handleDelete);

    const likeButton = cardElement.querySelector('.element__like-image');
    likeButton.setAttribute("id", index);
    if (cardItem.like) {
        likeButton.classList.toggle('element__like-image-active');
    }

    likeButton.addEventListener('click', event => {
        const index = event.target.getAttribute('id');
        initialCards[index].like = !initialCards[index].like;
        event.target.classList.toggle('element__like-image-active');
    });

    elementOnline.appendChild(cardElement);
}

function getIdFromEvent(event) {
    return event.target.getAttribute("id");
}

function render() {
    elementOnline.innerHTML = "";
    initialCards.forEach(renderItem);
}

function handleDelete(event) {
    const index = getIdFromEvent(event);
    initialCards.splice(index, 1);
    render();
}

render();

const titleInput = document.querySelector('.popup__field_input_title');
const imageInput = document.querySelector('.popup__field_input_url');

const elementTitle = document.querySelector('.element__title');
const elementImage = document.querySelector('.element__image');

function addSubmitHandler(evt) {
    evt.preventDefault();

    const title = titleInput.value;
    const image = imageInput.value;

    elementTitle.textContent = title;
    elementImage.src = image;

    initialCards.unshift({ name: title, link: image });
    render();

    popupToggle(popupAdd);

}

const formAddElement = document.querySelector('.popup__form_add_js');

formAddElement.addEventListener('submit', addSubmitHandler); 