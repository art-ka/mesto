export class UserInfo {
    constructor() {
        this.titleSelector = document.querySelector('.profile__title');
        this.subtitleSelector = document.querySelector('.profile__subtitle');
    }

    getUserInfo() {
        //возвращает объект с данными пользователя
        return {
        name: this.titleSelector.textContent,
        jobInput: this.subtitleSelector.textContent
    }

    }

    setUserInfo({name, job}) {
        //принимает новые данные пользователя и добавляет их на страницу
        //evt.preventDefault();

        this.titleSelector.textContent = name;
        this.subtitleSelector.textContent = job;

    }
}
