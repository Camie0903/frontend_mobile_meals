<template>
   <div class="onecard">
    <div v-if = "product">
    <div v-for ="item in product"
      :key="item.id"> 
      <div class="d-flex justify-content-center">
        <div class="card" style="width: 30rem">
          <img v-bind:src="item.image" class="img-fluid" style="width: 30rem"  />
          <div class="card-body">
            <p class="card-text">{{ item.title }}</p>
            <p class="card-text">R{{ item.price }}</p>
            <!-- <p class="card-text">{{ Product.descriptions }}</p> -->
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ProductsCard from "@/components/ProductsCard.vue";
export default {
  props: ["id"],
//   components: { 
//     ProductsCard,
//      },
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch("https://mobile-meals.herokuapp.com/products/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {this.product = data});

    //   console.log(this.product);
  },
};
</script>
<style>
    .onecard{
      padding: 50px;
    }
    .d-flex.justify-content-center {
    margin-top: 5%;
    margin-left: 31%;
}
    
</style>