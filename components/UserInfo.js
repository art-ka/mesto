export class UserInfo {
    constructor({titleSelector, subtitleSelector}) {
        titleSelector = document.querySelector('.profile__title');
        subtitleSelector = document.querySelector('.profile__subtitle');
    }

    getUserInfo() {
        //возвращает объект с данными пользователя
        return {
        name: titleSelector.textContent,
        jobInput: subtitleSelector.textContent
    }

    }

    setUserInfo() {
        //принимает новые данные пользователя и добавляет их на страницу
        evt.preventDefault();

        titleSelector.textContent = nameInput.value;
        subtitleSelector.textContent = jobInput.value;

    }
}
