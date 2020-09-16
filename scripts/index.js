const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close_type_editform');
const popupEdit = document.querySelector('.popup_type_edit');

const popupOpenAddButton = document.querySelector('.profile__add-button');
const popupCloseAddButton = document.querySelector('.popup__close_type_addform');
const popupAdd = document.querySelector('.popup_type_add');

const popupOpenImg = document.querySelector('.element__image');
const popupCloseImg = document.querySelector('.popup__close_type_img');
const popupImg = document.querySelector('.popup_type_img');


const popupToggle = function (popup) {
        popup.classList.toggle('popup_opened');
    }

// открытие окна ред
popupOpenButton.addEventListener('click',  (evt) => popupToggle(popupEdit));
// закрытие окна ред
popupCloseButton.addEventListener('click',  (evt) => popupToggle(popupEdit));

// открытие окна добавления
popupOpenAddButton.addEventListener('click',  (evt) => popupToggle(popupAdd));
// закрытие окна добавления
popupCloseAddButton.addEventListener('click',  (evt) => popupToggle(popupAdd));


const pOpenImg = document.querySelector('.elements');

pOpenImg.addEventListener('click',  (evt) => popupToggle(popupImg));
popupCloseImg.addEventListener('click',  (evt) => popupToggle(popupImg));

// Находим форму в DOM

let formElement = popupEdit.querySelector('.popup__form'); 
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

    popupToggle(popupEdit);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', formSubmitHandler); 

const popupCloseByClickOnOverlay = (event) => {

    if (event.target !== event.currentTarget) {
    return;
    }

    popupToggle(event.target);
}

popupEdit.addEventListener('click', popupCloseByClickOnOverlay);
popupAdd.addEventListener('click', popupCloseByClickOnOverlay);
popupImg.addEventListener('click', popupCloseByClickOnOverlay);


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

const formAddButton = document.querySelector('.popup__submit-button');


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

    popupToggle(popupAdd);
    
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

const formAddElement = document.querySelector('.popup__form_add_js');

formAddElement.addEventListener('submit', addSubmitHandler); 

