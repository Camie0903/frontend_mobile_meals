<template>

  <!-- <input class="SB" type="text" v-model="search" placeholder="Search..." /> -->
  
  <!-- <input
    class="SB"
    type="text"
    v-model="search"
    placeholder="Search by category"
  /> -->
  <div class="filterbtns">
    <div class="card-cam" @click="ChangeFood0">
      <h2>All</h2>
    </div>
     <div class="card-cam1" @click="ChangeFood1">
      <h2>Burgers</h2>
    </div>
    <div class="card-cam2" @click="ChangeFood2">
      <h2>Sushi</h2>
    </div>
    <div class="card-cam3" @click="ChangeFood3">
      <h2>Nachos</h2>
    </div>
    <div class="card-cam4" @click="ChangeFood4">
      <h2>Warm Drinks</h2>
    </div>
    <div class="card-cam5" @click="ChangeFood5">
      <h2>Cold Drinks</h2>
    </div>
  </div>


  <div class="product-body">
    <div class="row">
      <ProductsCard
        v-for="product in filteredproducts"
        :key="product.id"
        :product="product"
      ></ProductsCard>
    </div>
  </div>
  
</template>
<script>
import ProductsCard from "@/components/ProductsCard.vue";
export default {
      mounted() {
    // fetch("https://mobile-meals.herokuapp.com/products", {
    // })
    // .then ((res) => res.json())
    // .then((data) => (this.products = data));
    this.$store.dispatch("getproducts");
  },
  components: { 
    ProductsCard,
     },
  data() {
    return {
      search: "",
    products:[],
    };
  },

 computed: {
    filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        return product.category
          ?.toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    products() {
      return this.$store.state.products;
    },
  },

  methods: {
    ChangeFood0() {
      this.search = "";
    },
    ChangeFood1() {
        this.search = "Burgers";
    },
    ChangeFood2() {
      this.search = "Sushi";
    },
    ChangeFood3() {
      this.search = "Nachos";
    },
    ChangeFood4() {
      this.search = "Warm Drinks";
    },
    ChangeFood5() {
      this.search = "Cold Drinks";
    },
  },

};
</script>
<style scoped>
h2{
  margin-top: 2rem;
}
.card-cam {
  height: 100px;
  width: 200px;
  border: 2px solid black;
  background-image: url("https://i.postimg.cc/J4GJLGkn/all-filter.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
.card-cam1 {
  height: 100px;
  width: 200px;
  border: 2px solid black;
  background-image: url("https://i.postimg.cc/44SdgwZC/burger-filter.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
.card-cam2 {
  height: 100px;
  width: 200px;
  border: 2px solid black;
  background-image: url("https://i.postimg.cc/x82Sfksz/sushi-filter.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
.card-cam3 {
  height: 100px;
  width: 200px;
  border: 2px solid black;
  background-image: url("https://i.postimg.cc/NjH7TpBm/nacho.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
.card-cam4 {
  height: 100px;
  width: 200px;
  border: 2px solid black;
  background-image: url("https://i.postimg.cc/DZ5cZH6P/coffee-filter.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
.card-cam5 {
  height: 100px;
  width: 200px;
  border: 2px solid black;
  background-image: url("https://i.postimg.cc/fWcG7fT4/cooldrinks.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
.filterbtns{
display: flex;
align-items: flex-start;
}
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  min-height:50px;
  min-width: 50px;
}
img.img-fluid{
  height:20rem;
  /* margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem; */
}
.col-md-3 {
    display: flex;
    flex-wrap: wrap;
  gap: 5rem;
  margin-top: 10%;
}
.SB {
  margin-top: 53px;
  margin-left: 42vw;
  font-size: 21px;
  border: 0;
  outline:0;
  border-bottom: 2px solid black;
  width: 18%;
  font-size: 20px;
  background: transparent;
  color: black;
}

a:-webkit-any-link {
    color: black;
    cursor: pointer;
    text-decoration: none;
}

.container {
  margin-top: 15%;
}

.add {
  margin-bottom: 5%;
}
</style>
