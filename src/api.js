import axios from 'axios'
import router from "./routs/router"
import localStorageController from "@/localStorageController";

const api = axios.create({
    baseURL: "http://localhost:3500/",
});

// const update = axios.create({
//     baseURL: "http://localhost:3500/update/"
// })

// const updateApi = axios.create({
//     baseURL: "http://localhost:3500/",
//     // mode: "cors",
//     // headers: {
//     //     'Content-Type': 'application/json',
//     // },
//     // body: JSON.stringify({
//     //     "username": localStorage.user,
//     //     "role": localStorage.userRole,
//     // })
// });

api.interceptors.request.use(config => {
    config.headers = {'Authorization': 'Bearer_' + localStorage.tokenUser,
                        'Content-Type': 'application/json'
      };
    config.mode = "cors";
    return config;
}, error => {
    console.log(error);
})

api.interceptors.response.use(undefined,  async error => {
    if (error.response.status === 401) {
        console.log("aboab")


        // if(error.response.config.add("updateToken", true)){
            await localStorageController.methods.updateAccess();
            error.response.statusUpdate = true;
            if(error.response.statusUpdate){
              return this.getInformation;
            }


        //     return this.getInformation();
        // }

        // return await error.config;

        //добавить переменную в response и тут ее обрабаотывать и потом бробросить congig api



        // await this.getInformation();
    }

    if (error.response.status === 400){
        router.push({path: "/login"});
    }
})


export default {
    method: {
        getInformation() {
            return  api.get("controller1/getUsers").then((response) => {
                return response;
            })
        }

        // updateInfo(){
        //     return update.post("getAccess").then((response => {
        //         return response;
        //     }))
        // }
    }
};