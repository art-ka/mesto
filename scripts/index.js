let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close');
let popupOpenAddButton = document.querySelector('.profile__add-button');
let popupAdd = document.querySelector('.popup_type_add');
let popupCloseAddButton = document.querySelector('.popup__close_type_addform');

const popupToggle = function () {
        popup.classList.toggle('popup_opened');
    }

    popupOpenButton.addEventListener('click', popupToggle);

    popupCloseButton.addEventListener('click', popupToggle);

    const popupAddToggle = function () {
        popupAdd.classList.toggle('popup_opened');
    }

    popupOpenAddButton.addEventListener('click', popupAddToggle);

    popupCloseAddButton.addEventListener('click', popupAddToggle);

// Находим форму в DOM

let formElement = popup.querySelector('.popup__form'); 
let submitInput = formElement.querySelector('.popup__submit-button');

function getValue () {

    let title = document.querySelector('.profile__title');
    let subtitle = document.querySelector('.profile__subtitle');

    let nameProfile = title.innerHTML;
    let jobProfile = subtitle.innerHTML;

    let nInput = formElement.querySelector('.popup__field_text_name');
    let jInput = formElement.querySelector('.popup__field_text_job');

    nInput.value = nameProfile;
    jInput.value = jobProfile;
}

popupOpenButton.addEventListener('click', getValue);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.
                        
    // Находим поля формы в DOM
    let nameInput = formElement.querySelector('.popup__field_text_name');
    let jobInput = formElement.querySelector('.popup__field_text_job');

      // Получите значение полей из свойства value
    let name = nameInput.value;
    let job = jobInput.value; 

    // Выберите элементы, куда должны быть вставлены значения полей
    let profileTitle = document.querySelector('.profile__title');
    let profileSubtitle = document.querySelector('.profile__subtitle');

    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = name;
    profileSubtitle.textContent = job;

    popupToggle();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', formSubmitHandler); 

const popupCloseByClickOnOverlay = (event) => {

    if (event.target !== event.currentTarget) {
    return;
    }

    popupToggle(event);
}

popup.addEventListener('click', popupCloseByClickOnOverlay);



//NEW

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

    const deleteButton = cardElement.querySelector(".element__delete-button");

    deleteButton.setAttribute("id", index);

    deleteButton.addEventListener('click', handleDelete);

    const likeButton = cardElement.querySelector('.element__like-image');
    likeButton.setAttribute("id", index);
    if(cardItem.like) {
        likeButton.classList.toggle('element__like-image-active')
    }

    elementOnline.appendChild(cardElement);
}


function getIdFromEvent(event) {
	return event.target.getAttribute("id");
}

function render() {
	elementOnline.innerHTML = "";
    initialCards.forEach(renderItem);
    
    //setListeners();
    const likeImage = document.querySelectorAll('.element__like-image');

    likeImage.forEach(item => {
        item.addEventListener('click', event => {
            const index = item.getAttribute('id');
            initialCards[index].like = !initialCards[index].like;
            item.classList.toggle('element__like-image-active');
        });
    });
}

function handleDelete(event) {
    const index = getIdFromEvent(event);
	initialCards.splice(index, 1);
	render();
}

render();

//
const formAddButton = document.querySelector('.popup__submit-button');

const state = {
	mode: "add",
	index: null,
};

function handleSubmit() {
	const text = formInput.value;
	if (state.mode === "add") {
		items.unshift(text);
	} else if (state.mode === "edit") {
		items[state.index] = text;
	}

	render();
}

formAddButton.addEventListener("click", handleSubmit);


function addSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.
                        
    // Находим поля формы в DOM
    let titleInput = document.querySelector('.popup__field_text_title');
    let imageInput = document.querySelector('.popup__field_image_place');

      // Получите значение полей из свойства value
    let title = titleInput.value;
    let image = imageInput.value; 

    // Выберите элементы, куда должны быть вставлены значения полей
    let elementTitle = document.querySelector('.element__title');
    let elementImage = document.querySelector('.element__image');

    // Вставьте новые значения с помощью textContent
    elementTitle.textContent = title;
    elementImage.src = image;

    initialCards.unshift({name: title, link: image});
    render();

    popupAddToggle();
    
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

const formAddElement = document.querySelector('.popup__form_add_js');

formAddElement.addEventListener('submit', addSubmitHandler); 
