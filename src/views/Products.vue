<template>

  <!-- <input class="SB" type="text" v-model="search" placeholder="Search..." /> -->
  
  <!-- <input
    class="SB"
    type="text"
    v-model="search"
    placeholder="Search by category"
  /> -->
  <div class="filterbtns">
    <button @click="ChangeFood0">All</button>
    <button @click="ChangeFood1">Burgers</button>
    <button @click="ChangeFood2">Sushi</button>
    <button @click="ChangeFood3">Nachos</button>
    <button @click="ChangeFood4">Warm Drinks</button>
    <button @click="ChangeFood5">Cold Drinks</button>
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
