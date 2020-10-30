export class UserInfo {
    constructor({titleSelector, subtitleSelector}) {
        this._titleSelector = document.querySelector(titleSelector);
        this._subtitleSelector = document.querySelector(subtitleSelector);
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
