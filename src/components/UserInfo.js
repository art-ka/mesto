export class UserInfo {
    constructor() {
        this.titleSelector = document.querySelector('.profile__title');
        this.subtitleSelector = document.querySelector('.profile__subtitle');
        this.avatar = document.querySelector('.profile__avatar');
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

    getUserAvatar() {
        return {
            avatar: this.avatar.src,
        }
    }

    setAvatar({ avatar }) {
        this.avatar.src = avatar;
    }
}
