<template>
<div>main</div>
  <button @click="getUsers">Get Users!</button>
  <div>{{this.usersInfo}}</div>
  <ul v-for="elem in usersInfo" :key="elem">
    <li>{{elem}}</li>
  </ul>
</template>

<script>
import localStorageController from "@/localStorageController";
export default {
  name: "MainComponent",
  data(){
    return{
      usersInfo: []
    }
  },
  // rs(e).then((data) => this.usersInfo = data)
  methods: {
    getUsers(e){
      // localStorageController.methods.getUsers(e).then(data=>{console.log(data.data)})
      console.log( localStorageController.methods.getUsers(e).then((response) => this.usersInfo=response.data));
     localStorageController.methods.getUsers(e).then((response) => this.usersInfo=response.data); //обрабатываем promise и помещаем в дата
    }
  }
}
</script>
