let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile-info__edit-button');
let popupCloseButton = document.querySelector('.popup__close');

const popupToggle = function () {
        popup.classList.toggle('popup__opened');
    }

    popupOpenButton.addEventListener('click', popupToggle);

    popupCloseButton.addEventListener('click', popupToggle);


// Находим форму в DOM

let formElement = popup.querySelector('.popup__form'); 
let submitInput = formElement.querySelector('.popup__submit-button');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.
                        
    // Находим поля формы в DOM
    let nameInput = formElement.querySelector('.popup__profile-title');
    let jobInput = formElement.querySelector('.popup__profile-subtitle');

      // Получите значение полей из свойства value
    let name = nameInput.value;
    let job = jobInput.value; 

    // Выберите элементы, куда должны быть вставлены значения полей
    let profileTitle = document.querySelector('.profile-info__title');
    let profileSubtitle = document.querySelector('.profile-info__subtitle');

    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = name;
    profileSubtitle.textContent = job;

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', formSubmitHandler); 

submitInput.addEventListener('click', popupToggle);

const popupCloseByClickOnOverlay = (event) => {

    if (event.target !== event.currentTarget) {
    return
    }

    popupToggle(event)
}

popup.addEventListener('click', popupCloseByClickOnOverlay);