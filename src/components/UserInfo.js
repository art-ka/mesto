export class UserInfo {
    constructor() {
        this.titleSelector = document.querySelector('.profile__title');
        this.subtitleSelector = document.querySelector('.profile__subtitle');
        this.avatar = document.querySelector('.profile__avatar');
    }

    getUserInfo() {
        return {
            name: this.titleSelector.textContent,
            about: this.subtitleSelector.textContent,
        }
    }

    setUserInfo({ name, about, avatar }) {
        this.titleSelector.textContent = name;
        this.subtitleSelector.textContent = about;
        if(avatar) {
        this.avatar.src = avatar;
    }
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
