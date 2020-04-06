<template>
  <div class="footer">
    <hr />
    <div class="footer-details container pt-3">
      <div class="d-flex flex-row">
        <div class="col-lg-3 social-connects d-flex flex-column">
          <p class="media-title text-center"><b>FOLLOW US</b></p>
          <ul class="list-unstyled socials d-flex flex-row">
            <li>
              <a
                class="fb"
                target="_BLANK"
                href="http://www.facebook.com/blueapron"
              >
                <i class="fa fa-facebook-f fa-2x"></i>
              </a>
            </li>
            <li>
              <a class="tw" target="_BLANK" href="http://twitter.com/blueapron">
                <i class="fa fa-twitter fa-2x"></i>
              </a>
            </li>
            <li>
              <a
                class="ig"
                target="_BLANK"
                href="http://instagram.com/blueapron"
              >
                <i class="fa fa-instagram fa-2x"></i>
              </a>
            </li>
            <li>
              <a
                class="pin"
                target="_BLANK"
                href="http://pinterest.com/blueapron/"
              >
                <i class="fa fa-pinterest fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 text-center footer-search-content">
          <div class="clearfix">
            <p class="footer-search-title">
              <b> DISCOVER WHAT'S COOKIN' </b>
            </p>
            <div class="footer-search">
              <form>
                <input
                  type="text"
                  placeholder="Email Address"
                  data-validate="{required: true, email: true, messages: {email: 'Invalid email'}}"
                />
                <button class="btn-submit" value="submit">
                  Go
                </button>
              </form>
              <p>Sign up for offers, recipes, news &amp; more</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 blog-preview">
          <p class="blog-title text-center">
            <a href="http://blog.blueapron.com"><b>FROM THE BLOG</b></a>
          </p>
          <div class="d-flex flex-row">
            <a
              class="blog-preview-img"
              href="https://blog.blueapron.com/make-your-own-cinnamon-raisin-bread/"
            >
              <img
                src="https://i1.wp.com/blog.blueapron.com/wp-content/uploads/2020/03/IMG_1052.jpg?fit=3024%2C2428&amp;ssl=1"
                alt="Img 1052"
              />
            </a>
            <p class="blog-text">
              <a
                href="https://blog.blueapron.com/make-your-own-cinnamon-raisin-bread/"
                >Make Your Own Cinnamon Raisin Bread</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer-content font-small indigo">
      <div class="container text-center text-md-left">
        <div class="row">
          <div class="col-md-2">
            <ul class="list-unstyled">
              <li>
                <a href="#!">On The Menu</a>
              </li>
              <li>
                <a href="#!">Pricing</a>
              </li>
              <li>
                <a href="#!">Our Vision</a>
              </li>
              <li>
                <a href="#!">Wine</a>
              </li>
              <li>
                <a href="#!">Market</a>
              </li>
              <li>
                <a href="#!">Gifts</a>
              </li>
            </ul>
          </div>

          <div class="col-md-2">
            <ul class="list-unstyled">
              <li>
                <a href="#!">Blog</a>
              </li>
              <li>
                <a href="#!">Cookbook</a>
              </li>
              <li>
                <a href="#!">Suppliers</a>
              </li>
              <li>
                <a href="#!">Affiliates</a>
              </li>
              <li>
                <a href="#!">Supply Chains Act</a>
              </li>
              <li>
                <a href="#!">Food Safety</a>
              </li>
            </ul>
          </div>

          <div class="col-md-2">
            <ul class="list-unstyled">
              <li>
                <a href="#!">Careers</a>
              </li>
              <li>
                <a href="#!">Press</a>
              </li>
              <li>
                <a href="#!">Our Team</a>
              </li>
              <li>
                <a href="#!">Investor Relations</a>
              </li>
            </ul>
          </div>

          <div class="col-md-2">
            <ul class="list-unstyled">
              <li>
                <a class="customer-support" href="#!">Customer Support:</a>
              </li>
              <li>
                <a href="#!">Help Center & FAQ</a>
              </li>
              <li>
                <a href="#!">contact@blueapron.com</a>
              </li>
              <li>
                <a href="#!">(646) 891-4349</a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 ml-auto text-md-right">
            <span class="copy-right"> © Blue Apron, LLC 2020 </span>
            <ul class="list-unstyled">
              <li>
                <a href="#">Do Not "Sell" My Info</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
            <ul class="app-store-logos list-unstyled">
              <li class="app-store">
                <a
                  class="apple-app-store-logo"
                  target="_blank"
                  data-tracking-name="App Store"
                  href="https://itunes.apple.com/us/app/blue-apron-fresh-ingredients-recipes-delivered/id976642810?mt=8"
                >
                  <img src="../assets/AppStore.svg" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.blueapron.blueapron.release"
                >
                  <img
                    class="google-play"
                    alt="Get it on Google Play"
                    src="https://media.blueapron.com/assets/footer/play_store_badge_generic-59a6c4a20422c8cc477efb5d33564c6307f758eafb3c64307aa86e024f981dc7.png"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <p>
          If you are using a screen reader and are having problems using this
          website, please call <a href="#">1-844-462-8299</a> for assistance.
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="less" scoped>
@dark-grey: #303236;
@light-gray: #6a6d75;
@white: #fff;
@font-size: 14px;
@letter-spacing: 0.1em;

.footer-details {
  .footer-search-content {
    border-left: 1px solid #e4e6eb;
    border-right: 1px solid #e4e6eb;
    margin: 0 30px;
  }
  .media-title,
  .footer-search-title {
    color: @dark-grey;
    font-size: @font-size;
    letter-spacing: @letter-spacing;
  }
  .social-connects {
    a {
      color: #c4c4c4;
    }
    .socials {
      justify-content: space-evenly;
      padding: 10px;
    }
  }
  .footer-search-title {
    margin-bottom: 20px;
  }
  .footer-search {
    input {
      box-sizing: content-box;
      border-radius: 4px 0 0 4px;
      border: none;
      box-shadow: inset 0 0 0 1px #e4e6eb;
      color: @light-gray;
      padding: 10px 15px;
      margin-top: 0;
      background-color: @white;
      height: 20px;
      line-height: 20px;
      //   font-family: "Cera Pro", "HelveticaNeue", "Helvetica Neue",
      //     "HelveticaNeueRoman", "HelveticaNeue-Roman", "Helvetica Neue Roman",
      //     "TeXGyreHerosRegular", "Helvetica", "Tahoma", "Geneva", "Arial",
      //     sans-serif;
      font-size: @font-size;
      width: 245px;
    }
    p {
      color: @light-gray;
      font-size: @font-size;
      margin-bottom: 0;
      margin-top: 10px;
    }
    .btn-submit {
      border-radius: 0 4px 4px 0;
      box-sizing: content-box;
      margin-top: 0;
      padding: 10px 15px;
      width: 25px;
      height: 20px;
      line-height: 20px;
      color: @white;
      font-size: 15px;
      border: 0 none transparent;
      background-color: #245091;
    }
  }
  .blog-preview {
    a {
      color: @dark-grey;
    }
    .blog-title,
    .blog-text {
      font-size: @font-size;
    }
    .blog-preview-img {
      img {
        width: 70px;
        border-radius: 8px;
        margin-right: 20px;
      }
    }
  }
}
.footer-content {
  background-color: #0f346c;
  height: auto;
  line-height: 32px;
  padding: 25px 0;
  margin-top: 32px;
  font-size: @font-size;
  .list-unstyled {
    a {
      color: #a1bce6;
      //   font-family: HelveticaNeue, "Helvetica Neue", "HelveticaNeueRoman",
      //     "HelveticaNeue-Roman", "Helvetica Neue Roman", "TeXGyreHerosRegular",
      //     "Helvetica", "Tahoma", "Geneva", "Arial", "sans-serif";
    }
    .customer-support {
      color: @white;
    }
  }
  .app-store-logos {
    .app-store {
      width: 126px;
      margin-left: auto;
    }
    .google-play {
      width: 126px;
      height: 36px;
    }
  }
  .footer-copyright {
    p {
      color: @white;
      margin-left: 9%;
      margin-top: 2%;
      margin-bottom: 0;
    }
  }
  .copy-right {
    color: @white;
  }
}
</style>
