<template>
    <nav>
      <!-- <div v-if="user !== null"> -->
        <!-- <router-link
          v-if="user !== null"
          :to="{ name: 'profile', params: { id: user.user_id } }"
        >
          Welcome {{ user.full_name }}</router-link
        > -->

        <router-link to="/about">About</router-link> |
        <router-link to="/products">Products</router-link> |
        <router-link to="/admin">Admin</router-link> |
        <router-link to="/cart">Cart</router-link> |
        <router-link to="/userProfile"><i class="fa-solid fa-user"></i></router-link>
        <router-link to="/"><button @click="logout">logout</button></router-link>
        |
        <!-- <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#artCart"
          aria-controls="offcanvasRight"
        >
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
        <artCart /> -->
      <!-- </div> -->
    </nav>
   
  </template>
  <script>
//   import artCart from "../components/cart.vue";
  import store from "@/store";
  export default {
    // props: ["user"],
    name: "navbar",
    components: {
    //   artCart,
    },
    // mounted() {
    //   this.$store.dispatch("admincheck");
    // },
    computed: {
      user() {
        return store.state.user;
      },
    //   admin() {
    //     return store.state.admin;
    //   },
    },
    methods: {
      logout() {
        console.log("object");
        this.$store.state.user = null;
        this.$store.state.cart = null;
        localStorage.removeItem("users");
        this.$router.push("/");
      },
    },
  };
</script>