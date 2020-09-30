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

function popupToggle(popup) {
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

popupOpenAddButton.addEventListener('click', (evt) => {
    popupToggle(popupAdd);

    titleInput.value = "";
    imageInput.value = "";

    const inputList = Array.from(popupAdd.querySelectorAll('.popup__field'));
    const buttonElement = popupAdd.querySelector('.popup__submit-button');

    toggleButtonState({ inactiveButtonClass: 'popup__submit-button-disabled' }, inputList, buttonElement);
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

const elementTemplate = document.querySelector('#elements').content;
const elementOnline = document.querySelector('.element');

function renderItem(cardItem, index) {
    const cardElement = elementTemplate.cloneNode(true);
    const cardImg = cardElement.querySelector('.element__image');

    cardElement.querySelector('.element__title').innerText = cardItem.name;

    cardImg.src = cardItem.link;

    cardImg.addEventListener('click', (evt) => {

        popupImage.src = cardItem.link;
        popupTitle.innerHTML = cardItem.name;

        popupToggle(popupWithImage);
    });

    const deleteButton = cardElement.querySelector(".element__delete-button");

    deleteButton.addEventListener('click', function (evt) {
        const card = evt.target.closest('.element__cards');
        card.remove();
    });

    const likeButton = cardElement.querySelector('.element__like-image');

    likeButton.addEventListener('click', event => {
        event.target.classList.toggle('element__like-image-active');
    });

    elementOnline.prepend(cardElement);
}

function getIdFromEvent(event) {
    return event.target.getAttribute("id");
}

function render() {
    elementOnline.innerHTML = "";
    initialCards.forEach(renderItem);
}

render();

function addSubmitHandler(evt) {
    evt.preventDefault();

    const cardItem = {
        name: titleInput.value,
        link: imageInput.value
    }

    popupToggle(popupAdd);

    renderItem(cardItem);
}

const formAddElement = document.querySelector('.popup__form_add_js');

formAddElement.addEventListener('submit', addSubmitHandler); 