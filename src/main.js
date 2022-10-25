import {createApp}from 'vue'
import App from './App.vue'
import router from './routs/router'
const app =createApp(App)
    // el: '#app',
    // data(){
    //     return{
    //         form: {}
    //     }
    // },
//     methods: {
//         sendForm(e) {
//             e.preventDefault()
//             console.log("Отправка JSON", this.form)
//
//             fetch(
//                 e.target.action,
//                 {
//                     method: 'POST',
//                     mode: 'cors',
//                     cache: 'no-cache',
//                     credentials: 'same-origin',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(this.form)
//                 }
//             ).then(
//                 function (response) {
//                     console.log("Ответ сервера", response);
//                 },
//                 function (error) {
//                     console.log(error);
//                 }
//             );
//         }
//         },
// })
app.use(router); //регистрируем роутер
app.mount('#app') //загружает компонент

