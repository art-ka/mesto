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

function renderItem(cardItem) {
    //const htmlElement = itemTemplate.cloneNode(true);
    const cardElement = elementTemplate.cloneNode(true);

    //htmlElement.querySelector(".item__text").innerText = text;
    cardElement.querySelector('.element__title').innerText = cardItem.name;

    cardElement.querySelector('.element__image').src = cardItem.link;
    //htmlElement.querySelector(".list__item").setAttribute("id", index);
    elementOnline.appendChild(cardElement);
}

initialCards.forEach(renderItem);




















/*


    const elementTemplate = document.querySelector('#elements').content;  
    const elementOnline = document.querySelector('.element');

    const cardElement = elementTemplate.cloneNode(true);
    
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





//cardElement.querySelector('.element__title').textContent = name;
//cardElement.querySelector('.element__image').src = link;



    cardElement.querySelector('.element__title').textContent = 'Холмогорский район';
    cardElement.querySelector('.element__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';

    elementOnline.append(cardElement);

    const cardElementArhyz = elementTemplate.cloneNode(true);
    cardElementArhyz.querySelector('.element__title').textContent = 'Архыз';
    cardElementArhyz.querySelector('.element__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';

    elementOnline.append(cardElementArhyz);





/*

const deletButton = document.querySelector('.element__delet-button');
const test = document.querySelector('.element__image');

deletButton.addEventListener('click', function () {
    test.remove();
});






/*

function addelement(name, link) {
    const elementTemplate = document.querySelector('#elements').content;
    const cardElement = elementTemplate.cloneNode(true);

    cardElement.querySelector('.element__title').textContent = name;
    cardElement.querySelector('.element__image').src = link;

  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
  song__like.classList.toggle('song__like_active');
});
  
  songsContainer.append(songElement);
}

addButton.addEventListener('click', function () {
  const artist = document.querySelector('.input__text_type_artist');
  const title = document.querySelector('.input__text_type_title');

  addSong(artist.value, title.value);
  renderHasSongs();

  artist.value = '';
  title.value = '';
});


*/