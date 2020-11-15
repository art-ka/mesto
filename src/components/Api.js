export class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-17/cards', {
            headers: {
                authorization: 'ef890c66-d7a0-4a1d-a482-7b78f3f64350'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }

    addCard(inputTitle, inputUrl) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-17/cards', {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({ 
                name: inputTitle, 
                link: inputUrl 
            })
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
        })
        /*
        .finally(() => {
            PopupWithForm.renderLoading(false);
            })
            */
    }

    takeUserInfo() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-17/users/me', {
            headers: {
                authorization: 'ef890c66-d7a0-4a1d-a482-7b78f3f64350'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }

    changeAvatar() {

        const inputAvatar = document.querySelector('.popup__field_input_avatar');

        return fetch('https://mesto.nomoreparties.co/v1/cohort-17/users/me/avatar', {
            method: "PATCH",
            headers: {
                authorization: 'ef890c66-d7a0-4a1d-a482-7b78f3f64350',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                avatar: inputAvatar.value
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }

    editInfo() {
        const inputName = document.querySelector('.popup__field_input_name');
        const inputAbout = document.querySelector('.popup__field_input_job'); 

        return fetch('https://mesto.nomoreparties.co/v1/cohort-17/users/me', {
            method: "PATCH",
            headers: {
                authorization: 'ef890c66-d7a0-4a1d-a482-7b78f3f64350',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name: inputName.value, 
                about: inputAbout.value 
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }

    likeCard(_id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-17/cards/likes/${_id}`, {
            method: "PUT",
            headers: {
                authorization: 'ef890c66-d7a0-4a1d-a482-7b78f3f64350',
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }

    deleteLikeCard(_id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-17/cards/likes/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: 'ef890c66-d7a0-4a1d-a482-7b78f3f64350',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }

    deleteCard(_id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-17/cards/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: 'ef890c66-d7a0-4a1d-a482-7b78f3f64350',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res;
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }
}

