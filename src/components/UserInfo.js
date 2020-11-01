export class UserInfo {
    constructor() {
        this.titleSelector = document.querySelector('.profile__title');
        this.subtitleSelector = document.querySelector('.profile__subtitle');
    }

    getUserInfo() {
        return {
            name: this.titleSelector.textContent,
            jobInput: this.subtitleSelector.textContent
        }
    }

    setUserInfo({ name, job }) {
        this.titleSelector.textContent = name;
        this.subtitleSelector.textContent = job;
    }
}
