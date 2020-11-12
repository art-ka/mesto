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

    createCard(name, link) {
        return fetch(this.baseUrl, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({name, link})
        }).then((res) => {
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

    addNewCard() {

    }

    deletCard() {
        
    }
}

