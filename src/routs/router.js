import LogPage from "../components/LoginComponent";
import MainPage from "../components/MainComponent";
import RegPage from "../components/RegistrationComponent"
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: "/", component: MainPage },
    { path: "/registration", component: RegPage },
    { path: "/login", component: LogPage },
];
export default new createRouter({
    history: createWebHistory(),
    routes,
});
