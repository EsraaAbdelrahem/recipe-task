<template>
  <div id="app">
    <div id="nav">
      <s-header></s-header>
      <login-page></login-page>
      <s-footer></s-footer>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: "cairo", sans-serif;
  padding-top: 80px;
  //background-color: #fafbfc;
  .login {
    padding: 0 40px;
  }
}
</style>
