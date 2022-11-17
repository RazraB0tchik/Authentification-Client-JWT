
<template>
  <h1>Аутентификация</h1>
  <form @submit=useApiController>
    <input v-model="username" placeholder="Введите имя">
    <input v-model="password" placeholder="Введите пароль">
    <input type="submit" value="Подтвердить"/>
    <div>{{this.loginElements.nameUser}}</div>
  </form>
</template>

<script>
import localStorage from "@/localStorageController";
export default {
  name: "LoginComponent",
  data() { //объект data необходим для задания переменных
    return {
      username: "",
      password: "",
      loginElements: [{nameUser: this.username}, {passwordUser: this.password}]
    }
  },
  watch: {
    username: function (newUsername) {
      if (newUsername != null) {
        this.loginElements.nameUser = newUsername; //если поймает новое значение, добавит его в массив
      }
    }, //более длинная реализация watch
    password(newPassword) {
      this.loginElements.passwordUser = newPassword;
    }
  },
  methods: {
    useApiController(e) {
      this.loginElements.push(this.username)
      localStorage.methods.loginUser(e, this.loginElements)
    }
  }
}
</script>

























