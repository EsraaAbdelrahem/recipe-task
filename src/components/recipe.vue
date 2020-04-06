<template>
  <div class="d-flex recipe-section">
    <div class="recipe-details">
      <div class="recipe-title">
        <h1>
          <b>{{ recipe.name }}</b>
        </h1>
        <p class="mb-2">with Tzatziki &amp; Warm Farro Salad</p>
        <img src="../assets/clock.svg" />
        <span class="total-time">50 min</span>
      </div>
      <div class="mt-3 premium-price">
        <span>$14.99/SERVING</span>
      </div>
      <div class="d-flex recipe-main-list">
        <div class="servings-section">
          <img src="../assets/ForkSpon.svg" />
          <span>2 Servings</span>
        </div>
        <div class="calories">
          <img src="../assets/Apple.svg" />
          <span>800 Cals/serving</span>
        </div>
        <span class="view-all">View All</span>
      </div>
      <div class="recipe-description">
        <p class="description">
          {{ recipe.description }}
          <br />
          <a
            href="https://media.blueapron.com/recipes/23708/c_card_pdfs/1585748626-33-0012-8842/2PRE12_StuffedPork_WEB.pdf"
          >
            <strong>CLICK FOR RECIPE CARD</strong>
          </a>
        </p>
        <a class="get-cooking-btn" href="#">
          <span class="btn-txt">Get Cooking</span>
        </a>
      </div>
    </div>
    <div class="recipe-photo">
      <img
        class="img-max"
        alt="Spinach &amp; Goat Cheese-Stuffed Pork Roast with Tzatziki &amp; Warm Farro Salad"
        src="https://media.blueapron.com/recipes/23708/square_newsletter_images/1583445863-33-0071-8483/0406_2P12_Stuffed-Pork_076_Web_SQ_hi_res.jpg?quality=80&amp;width=600"
      />
      <span class="premium">
        <b>Premium</b>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      recipe: "Recipe/recipe"
    })
  },
  methods: {
    ...mapActions({
      getRecipeDetails: "Recipe/getRecipeDetails"
    })
  },
  created: function() {
    this.getRecipeDetails();
  }
};
</script>

<style lang="less" scoped>
.recipe-section {
  margin-top: 25px;
  .recipe-photo {
    padding: 15px 0 0 15px;
    margin-bottom: 30px;
    //not recommended
    img {
      width: 570px;
      height: 570px;
    }
    .premium {
      background-color: #1eb392;
      color: #fff;
      font-size: 14px;
      letter-spacing: 0.08em;
      line-height: 1;
      padding: 15px 23px;
      position: absolute;
      text-transform: uppercase;
      top: 132px;
      right: 105px;
    }
  }
  .recipe-details {
    .recipe-title {
      h1 {
        font-size: 30px;
        font-family: "Chronicle Ssm";
        color: #002c9b;
        margin-bottom: 12px;
      }
      p {
        font-size: 17px;
        color: #6a6d75;
      }
      img {
        height: 14px;
        width: 14px;
        color: #0a9b3e;
      }
      .total-time {
        font-size: 14px;
        padding-left: 5px;
        color: #009978;
        margin-right: 7px;
      }
    }
    .premium-price {
      color: #1eb392;
      font-size: 13px;
      border: 1px solid #1eb392;
      border-radius: 4px;
      padding: 2px 15px;
      width: fit-content;
      letter-spacing: 0.03em;
      line-height: 20px;
    }
    .recipe-main-list {
      margin: 20px 0;
      width: 80%;
      height: 25px;
      .calories {
        padding: 0 15px;
        margin: 0 10px;
        border-left: 1px solid #e5e7ec;
        border-right: 1px solid #e5e7ec;
      }
      .servings-section,
      .calories,
      .view-all {
        flex-grow: 1;
        span {
          padding: 0 15px;
          color: #6a6d75;
          font-size: 16px;
        }
      }
      .view-all {
        padding: 20px;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.13em;
        line-height: 18px;
        padding: 2px;
        border-bottom: 2px #002c9b solid;
        color: #002c9b;
        text-transform: uppercase;
      }
    }
    .recipe-description {
      box-sizing: border-box;
      margin-top: 30px;
      .description {
        //font-family: "Chronicle Ssm";
        line-height: 32px;
        color: #595959;
        a {
          color: #0f346c;
        }
      }
      .get-cooking-btn {
        background-color: #f26226;
        margin-top: 8px;
        color: #fff;
        font-size: 16px;
        line-height: 55px;
        padding: 0 40px;
        border-radius: 2px;
        box-sizing: content-box;
        cursor: pointer;
        display: inline-block;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        &:hover {
          background-color: #e7581d;
        }
      }
    }
  }
}
</style>
