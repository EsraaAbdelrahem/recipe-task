import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ValidationProvider } from "vee-validate";
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

//global components enhancment to a separated file
//shared components
import Header from "./sharedComponents/Header";
import footer from "./sharedComponents/Footer";

//stand-alone components
import login from "./components/login";
import recipe from "./components/recipe";
import Ingredients from "./components/Ingredients";

//pages
import loginPage from "./views/loginPage";
import recipePage from "./views/recipePage";

//global components
Vue.component("s-header", Header);
Vue.component("s-footer", footer);
Vue.component("login-form", login);
Vue.component("recipe", recipe);
Vue.component("validation-provider", ValidationProvider);
Vue.component("login-page", loginPage);
Vue.component("recipe-page", recipePage);
Vue.component("ingredients", Ingredients);

Vue.config.productionTip = false;

extend("email", email);
extend("required", {
  ...required,
  message: "This field is required"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
