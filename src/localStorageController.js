


export default {
    data() {
        return {
            user: "",
            tokenUser: "",//переменные для записи в localhost
            mapUser: [],
            resultMap: [],
            allUsers: new Map()
        }
    },
    methods: {
       async loginUser(e, elementsUserLogin = []) {
            e.preventDefault()
            try {
                let response = await fetch("http://localhost:3500/auth/login", //при помощи await мы дожидаемся выполнения блока, пока не выполнится, дальше не пойдет
                    {
                        method: 'POST', //тип метода
                        mode: "cors", //делаем запросы в свзи с политикой cors сервера
                        credentials: "same-origin", //мы не отправляем запросы на другой сервер (по умолчанию)
                        headers: {
                            'Content-Type': 'application/json' //заголовок запроса, по сути определяет че будет в теле
                        },
                        body: JSON.stringify({
                            "email": elementsUserLogin.emailUser,
                            "password": elementsUserLogin.passwordUser
                        }) //переводит строку в json
                    });
                let userInfo = await response.json(); //получаем наши properties, приостановив асинхронную функцию
                this.mapUser = userInfo; //передвем в наш глобальный массив, то что вышло
                localStorage.user = this.mapUser.username;
                localStorage.tokenUser = this.mapUser.tokenLogin; //записываем в localhost данные
            } catch (errore) {
                console.log(errore)
            }
        },

        async registrateUser(e, elementsRegistration = []) {
             e.preventDefault()
            try {
                let response = await fetch("http://localhost:3500/reg/registrationUser", {
                    method: "POST",
                    mode: "cors",
                    credentials: "same-origin",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "username": elementsRegistration.nameUser,
                        "password": elementsRegistration.passwordUser,
                        "email": elementsRegistration.emailUser
                    })
                });
                let userInfo = await response.json(); //только для асинхрон функций (видимо функции должны быть асинхронными, чтобы vue мог спокойно вытащить json ответ)
                this.mapUser = userInfo;
                localStorage.user = this.mapUser.username;
                localStorage.tokenUser = this.mapUser.tokenRegistered;
            } catch (errore) {
                console.log(errore)
            }
        },

        async getUsers(e) {
            e.preventDefault();
            try {
                let response = await fetch("http://localhost:3500/controller1/getUsers", {
                    method: "GET",
                    credentials: "same-origin",
                    mode: "cors",
                    headers: {
                        'Authorization': 'Bearer_' + localStorage.tokenUser,
                    }
                });
                let allUserInfo = await response.json();
                return allUserInfo;
            } catch (errore) {
                console.log(errore);
            }
        }
    }
}


