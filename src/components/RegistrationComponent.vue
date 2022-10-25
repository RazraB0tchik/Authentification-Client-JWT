<template>
<div>registration</div>
<form @submit="registrateUser">
  <input v-model="username" placeholder="Введите имя">
  <input v-model="password" placeholder="Введите пароль">
  <input v-model="email" placeholder="Введите почту">
  <input type="submit" value="Зарегестрироваться">
</form>
</template>

<script>
import localStorage from "@/localStorageController";
export default {
  name: "RegistrationComponent",
  data(){
    return{
      username: "",
      password: "",
      email: "",
      registrateElements: [{nameUser: this.username},{passwordUser: this.password}, {emailUser: this.email}]
    }
  },
  watch: {
    username(newUsername){
      this.registrateElements.nameUser = newUsername;
    },
    password(newPassword){
      this.registrateElements.passwordUser = newPassword;
    },
    email(newEmail){
      this.registrateElements.emailUser = newEmail;
    },
  },
  methods: {
    registrateUser(e){
      localStorage.methods.registrateUser(e, this.registrateElements)
    }
  }
}
</script>
