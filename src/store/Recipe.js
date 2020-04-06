import Vue from "vue";
import axios from "axios";

Vue.prototype.$http = axios;

export default {
  namespaced: true,
  state: {
    recipe: ""
  },
  getters: {
    recipe(state) {
      return state.recipe;
    }
  },
  mutations: {
    ["SET_RECIPE_DETAILS"](state, recipe) {
      state.recipe = recipe.data;

      return recipe;
    }
  },
  actions: {
    getRecipeDetails({ commit }) {
      return axios
        .get("http://5e83095578337f00160ae908.mockapi.io/meals")
        .then(data => {
          commit("SET_RECIPE_DETAILS", data);
        });
    }
  }
};
