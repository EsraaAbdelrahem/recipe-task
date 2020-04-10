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
      state.user = user;

      return user;
    }
  },
  actions: {
    doLogin({ commit }, user) {
      return axios
        .post("https://chif-elhana.herokuapp.com/api/v1/login", user)
        .then(data => {
          commit("SET_USER_DATA", data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
