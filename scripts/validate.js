
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    
    console.log(inputElement.id);

    errorElement.classList.add('popup__field-error-active');
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__field-error-active');
    errorElement.textContent = '';
};


const checkInputValidity = (formElement, inputElement) => {
    console.log(inputElement.validity.valid);

    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);

        console.log(inputElement.validationMessage);

    } else {
        hideInputError(formElement, inputElement);
    }
};


const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__field'));
    inputList.forEach((inputElement) => { 
    inputElement.addEventListener("input", () => {
        

        checkInputValidity(formElement, inputElement);



    });
    });
}


const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};

enableValidation();






/*
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};


function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__submit-button-disabled');
    } else {
        buttonElement.classList.remove('popup__submit-button-disabled');
    }
}




// включение валидации вызовом enableValidation
// все настройки передаются при вызове
// Сделайте функцию enableValidation ответственной за включение валидации всех форм. 
//Пусть она принимает как объект настроек все нужные функциям классы и селекторы элементов
/*
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});*/