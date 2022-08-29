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
.img-fluid {
  width: 18rem;
  border-radius: 5px;
  transition: 0.2 linear;
  height: 11rem;
}
.img-fluid:hover {
  transform: scale(1.1);
}
.router-text{
  text-decoration: none;
  color: black;
}

.cards {
  margin-top: 25px;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
}
.card {
  position: relative;
  border-radius: 1em;
  width: 230px;
  height: 290px;
  background-color: #FFF;
  -webkit-box-shadow: 0 2px 5px #777;
  -moz-box-shadow: 0 2px 5px #777;
  box-shadow: 0 2px 5px #777;
  overflow: hidden;
  margin: 10px 10px;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.card .card-header {
  position: absolute;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 45%;
}
.card .card-header .card-image {
  height: 55%;
}
.card .card-header.bg1 {
  background-color: #00A388;
}
.card .card-header.bg2 {
  background-color: #F89B3C;
}
.card .card-header.bg3 {
  background-color: #1EAAC2;
}

.card .card-content {
  position: absolute;
  top: 45%;
  left: 0;
  width: 100%;
  height: 55%;
  padding: 0 3%;
}
.card .card-content .card-title {
  margin: 70px 0;
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  font-size: 1.3em;
}
.card .card-content .card-text {
  position: absolute;
  top: 70%;
  -webkit-transform: translate(0, -50%);
  -moz-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #AAA;
  font-family: 'Sansita One', sans-serif;
  font-size: 0.85em;
  margin-left: 6rem;
}

.card .card-content {
  position: absolute;
  right: 10%;
  bottom: 5%;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-size: 0.9em;
  color: #1EAAC2;
  font-weight: bold;
}
.card .card-content {
  color: #8ED4E0;
}
.card:hover {
  -webkit-box-shadow: 0 5px 6px #777;
  -moz-box-shadow: 0 5px 6px #777;
  box-shadow: 0 5px 6px #777;
  -webkit-transform: translate(0, -2%);
  -moz-transform: translate(0, -2%);
  transform: translate(0, -2%);
}
    
</style>