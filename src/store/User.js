import Vue from "vue";
import axios from "axios";

Vue.prototype.$http = axios;

export default {
  namespaced: true,
  state: {
    user: {
      phone: "",
      password: ""
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    ["SET_USER_DATA"](state, user) {
      state.user = user.data;

      return user;
    }
  },
  actions: {
    doLogin() {
      return axios
        .post("https://chif-elhana.herokuapp.com/api/v1/login", {
          phone: this.user.phone,
          password: this.user.password
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
