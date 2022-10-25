
<template>
  <h1>Аутентификация</h1>
  <form @submit=useApiController>
    <input v-model="email" placeholder="Введите имя">
    <input v-model="password" placeholder="Введите пароль">
    <input type="submit" value="Подтвердить"/>
    <div>{{this.loginElements.emailUser}}</div>
  </form>
</template>

<script>
import localStorage from "@/localStorageController";
export default {
  name: "LoginComponent",
  data() { //объект data необходим для задания переменных
    return {
      email: "",
      password: "",
      loginElements: [{emailUser: this.email}, {passwordUser: this.password}]
    }
  },
  watch: {
    email: function (newEmail) {
      if (newEmail != null) {
        this.loginElements.emailUser = newEmail; //если поймает новое значение, добавит его в массив
      }
    }, //более длинная реализация watch
    password(newPassword) {
      this.loginElements.passwordUser = newPassword;
    }
  },
  methods: {
    useApiController(e) {
      this.loginElements.push(this.email)
      localStorage.methods.loginUser(e, this.loginElements)
    }
  }
}
</script>

























