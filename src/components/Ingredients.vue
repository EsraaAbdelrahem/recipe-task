<template>
  <div>
    <section class="recipe-ingredients">
      <div class="title">
        <p>fresh</p>
        <p>INGREDIENTS</p>
      </div>
      <div class="ingredients-content d-flex">
        <div class="ingredients-img">
          <img
            class="img-max"
            alt="Spinach &amp; Goat Cheese-Stuffed Pork Roast with Tzatziki &amp; Warm Farro Salad"
            style="width: 100%"
            src="https://media.blueapron.com/recipes/23708/ingredient_images/1583439912-33-0049-3104/0406_ING_2PRE12_large_feature.png"
          />
        </div>
        <ul class="list-unstyled col-md-4">
          <li
            v-for="(ingredient, key) in recipe.ingredients.component"
            :key="key"
          >
            <div class="ingredients-details">
              <b>
                <span>
                  {{ ingredient.quantity }}
                </span>
                {{ ingredient.name }}
              </b>
            </div>
          </li>
        </ul>
      </div>
    </section>
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
.recipe-ingredients {
  .title {
    //repeated-section
    p:first-child {
      font-family: "Chronicle Ssm";
      font-size: 20px;
      color: #6a6d75;
      margin-bottom: 6px;
    }
    p:nth-child(2) {
      font-family: "Helvetica";
      font-size: 30px;
      color: #0f346c;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }
  .ingredients-details {
    padding: 4px;
    color: #0f346c;
    span {
      font-family: "Chronicle Ssm";
      font-size: 16px;
      color: #6a6d75;
      width: 23%;
      display: inline-block;
      text-align: right;
      margin-right: 5px;
    }
  }
}
</style>
