/*
export { popupToggle, popupCloseByEsc }

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
*/
