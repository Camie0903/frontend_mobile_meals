<template>
  <Navbar/>
  <router-view/>
  <Product
  v-for="product  in  products"
  :key="product.id"
  :id="product.id"
  :title="product.title"
  :image="product.image"
  :price="product.price"
  />
  <Footer/>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Product from "./views/Products.vue";
import Footer from "./components/Footer.vue";
export default{
  name:"App",
  computed: {
    products() {
      return this.$store.getters.products;
    }
  },
  components:{
    Navbar,
    Product,
    Footer
}
}
</script>
<style>
  body {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
  }
  
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
