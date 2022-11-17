import axios from 'axios'
import localStorageController from "@/localStorageController";
import router from "./routs/router"

const api = axios.create({
    baseURL: "http://localhost:3500/",
});

api.interceptors.request.use(config => {
    config.headers = {'Authorization': 'Bearer_' + localStorage.tokenUser,
                    'Content-Type': 'application/json',
      };
    config.mode = "cors";
    return config;
}, error => {
    console.log(error)
})

api.interceptors.response.use(undefined,async error => {
    if (error.response.status === 401) {
        await localStorageController.methods.updateAccess();
        await this.getInformation();
    }

    if (error.response.status === 400) {
        router.push({path: "/login"});
    }
})

export default {
    method: {
        getInformation() {
           return api.get("controller1/getUsers")
                .then((response) => {
                    return response;
                })
        }
    }
};