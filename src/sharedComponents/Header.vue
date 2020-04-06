<template>
  <div>
    <nav class="navbar p-0 navbar-expand-lg fixed-top navbar-light">
      <div class="container">
        <a class="navbar-brand" aria-label="Blue Apron homepage" href="/">
          <img src="../assets/ApronLogo.svg" />
        </a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">ON THE MENU</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">PRICING</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">WINE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">GIFTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">MARKET</a>
            </li>
          </ul>
          <div class="d-flex navbar-text">
            <a class="nav-link" href="#">LOG IN</a>
            <a href="#" class="nav-link header-btn">SIGN UP</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="less" scoped>
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #8080803b;
  .container {
    .navbar-collapse {
      .nav-link {
        padding-right: 0.5rem;
        padding-left: 1rem;
        letter-spacing: 0.1em;
        color: #6a6d75;
        font-family: Helvetica;
        font-size: 13px;
        &:hover {
          color: #0f346c;
        }
      }
      .navbar-text {
        .header-btn {
          background-color: #f26226;
          color: white;
          font-size: 14px;
          line-height: 40px;
          height: 40px;
          padding: 0 20px;
          &:hover {
            background-color: #e7581d;
          }
        }
      }
    }
  }
}
</style>
