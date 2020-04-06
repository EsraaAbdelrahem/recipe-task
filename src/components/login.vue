<template>
  <div>
    <form class="login-form">
      <h2 class="text-center">
        <b>Log In</b>
      </h2>
      <div class="form-group">
        <label for="exampleInputEmail1">
          <b>EMAIL</b>
        </label>
        <validation-provider name="email" rules="email" v-slot="{ errors }">
          <input
            v-model="user.email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
          <span>{{ errors[0] }}</span>
        </validation-provider>
        <input
          v-model="user.phone"
          type="tel"
          id="phone"
          name="phone"
          placeholder="123-45-678"
          required
        />
      </div>
      <div class="form-group">
        <validation-provider rules="required" v-slot="{ errors }">
          <label for="exampleInputPassword1">
            <b>PASSWORD</b>
          </label>
          <input
            v-model="user.password"
            type="password"
            class="form-control"
            name="password"
            placeholder="Password"
          />
          <span>{{ errors[0] }}</span>
        </validation-provider>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <div class="d-flex justify-content-between">
          <label class="form-check-label" for="exampleCheck1">Remember Me?</label>
          <label class="password-label">Forget Password?</label>
        </div>
      </div>
      <button type="submit" class="btn" @click="doLogin()">
        LOG IN
      </button>
      <div class="form-divider">
        <div class="txt-box">
          <span>or</span>
        </div>
      </div>
      <div class="d-flex facebook-btn">
        <img class="ml-2" src="../assets/facebook.png" />
        <p class="mt-0 mb-0 ml-5 align-self-center">
          <b>LOG IN WITH FACEBOOK</b>
        </p>
      </div>
      <div class="login-signup">
        Don't have an account?
        <a href="#">Sign Up</a>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "../router";
export default {
  computed: {
    ...mapGetters({
      user: "User/user"
    })
  },
  methods: {
    ...mapActions({
      doUserLogin: "User/doLogin"
    }),
    doLogin() {
      this.doUserLogin();
      router.push({ name: "recipePage" });
    }
  }
};
</script>

<style lang="less" scoped>
// variables "enhancment to be all in one file called color variables"

@default-font: Helvetica;
@white: #fff;
@light-gray: #6a6d75;
@light-blue: #0f346c;
@dark-blue: #0d2a54;
@blue: #245091;

.login-form {
  font-family: @default-font;
  color: #303236;
  background-color: @white;
  border: 0;
  padding: 20px;
  margin: 30px 0;
  border-radius: 4px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.08), inset 0px 0px 0px 1px #f0f2f7;
  .form-control {
    height: 42px;
  }
  .form-divider {
    border-bottom: 1px solid #d3d5db;
    margin-bottom: 20px;
    .txt-box {
      position: relative;
      margin-top: 10px;
      margin-bottom: -12px;
      text-align: center;
      span {
        color: @light-gray;
        background-color: @white;
        font-size: 16px;
        padding: 0 10px;
      }
    }
  }
  label {
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.1em;
  }
  .form-check {
    cursor: pointer;
    .form-check-label {
      color: #b9b9c5;
    }
    .password-label {
      color: @light-blue;
      &:active {
        color: @dark-blue;
      }
    }
  }
  .btn {
    margin-top: 10px;
    color: @white;
    background-color: @blue;
    &:hover {
      background-color: @dark-blue;
    }
  }
  .btn,
  .facebook-btn {
    font-size: 14px;
    height: 48px;
    width: -webkit-fill-available;
  }
  .facebook-btn {
    border: 1px solid #b1b5bd;
    background: transparent;
    color: @blue;
    border-radius: 2px;
    letter-spacing: 0.1em;
    font-size: 13px;
    &:hover {
      background-color: @white;
      border-color: @light-blue;
      color: @dark-blue;
    }
    img {
      width: 15px;
      height: 14px;
      margin-top: 16px;
    }
  }
  .login-signup {
    font-family: @default-font;
    font-size: 14px;
    text-align: center;
    margin-top: 25px;
    color: @light-gray;
    a {
      color: @light-blue;
      text-decoration: underline;
      cursor: pointer;
      &:active {
        color: @dark-blue;
      }
    }
  }
}
</style>
