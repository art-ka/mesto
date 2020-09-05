let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close');

const popupToggle = function () {
        popup.classList.toggle('popup_opened');
    }

    popupOpenButton.addEventListener('click', popupToggle);

    popupCloseButton.addEventListener('click', popupToggle);


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