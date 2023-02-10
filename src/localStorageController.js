// import axios from "axios";

import axios from "axios";

import api from './api'
export default {
    data() {
        return {
            user: "",
            tokenUser: "",//переменные для записи в localhost
            roleUser: "",
            mapUser: [], //массив с данными о пользователе
            resultMap: [],
            infoReq: "",
        }
    },

    methods: {

       async loginUser(e, elementsUserLogin = []) {
            e.preventDefault()
            try {
                let response = await fetch("http://localhost:3500/auth/api/login", //при помощи await мы дожидаемся выполнения блока, пока не выполнится, дальше не пойдет
                    {
                        method: 'POST', //тип метода
                        mode: "cors", //делаем запросы в свзи с политикой cors сервера
                        credentials: "same-origin", //мы не отправляем запросы на другой сервер (по умолчанию)
                        headers: {
                            'Content-Type': 'application/json' //заголовок запроса, по сути определяет че будет в теле
                        },
                        body: JSON.stringify({
                            "username": elementsUserLogin.nameUser,
                            "password": elementsUserLogin.passwordUser
                        }) //переводит строку в json
                    });
                let userInfo = await response.json(); //получаем наши properties, приостановив асинхронную функцию
                this.mapUser = userInfo; //передвем в наш глобальный массив, то что вышло
                localStorage.user = this.mapUser.username;
                localStorage.tokenUser = this.mapUser.tokenLogin; //записываем в localhost данные
                localStorage.roleUser = this.mapUser.role;
            } catch (error) {
                console.log(error)
            }
        },

         async registrateUser(e, elementsRegistration = []) {
            e.preventDefault()
            try {
                let response = fetch("http://localhost:3500/reg/registrationUser", {
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
                let userInfo = response.json(); //только для асинхрон функций (видимо функции должны быть асинхронными, чтобы vue мог спокойно вытащить json ответ)
                this.mapUser = userInfo;
                localStorage.user = this.mapUser.username;
                localStorage.tokenUser = this.mapUser.tokenRegistered;
                localStorage.roleUser = this.mapUser.role;
            } catch (errore) {
                console.log(errore)
            }
        },


        async getUsers(e) {
            e.preventDefault()
            return await api.method.getInformation();
        },


        async updateAccess() {
            await axios.post("http://localhost:3500/update/getAccess", {
                           "username": localStorage.user,
                           "role": localStorage.roleUser,
           },
               {
                   mode: "cors",
                   credentials: "same-origin",
                   headers: {
                       'Content-Type': 'application/json'
                   }
           })
               .then(response => {
                   this.mapUser = response.data;
                           localStorage.user = this.mapUser.username;
                           localStorage.tokenUser = this.mapUser.tokenUpdate;
                           localStorage.roleUser = this.mapUser.role;
               })

        },
    }
}



