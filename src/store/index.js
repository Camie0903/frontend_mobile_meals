import { createStore } from "vuex";
import router from "@/router";

export default createStore({  
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    token: null,
    authenticated: false
  },
  getters: {},
  mutations: {
    setuser: (state, user) => {
      state.user = user;
    },
    setusers: (state, users) => {
      state.users = users;
    },
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state, product) => {
      state.product = product;
    },
    settoken: (state, token) => {
      state.token = token;
    },
    setAuthentication(state, status) {
      state.authenticated = status;
    },
   
  },
  actions: {
    logout: async (context) => {
      context.commit("setuser", null);
      window.location = "/login";
    },

    // Login
    login: async (context, payload) => {
      let res = await fetch("https://mobile-meals.herokuapp.com/users/login", {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });
      let data = await res.json();
      console.log(data);
      if (data.token) {
        context.commit("settoken", data.token);
        // Verify token
        //
        fetch("https://mobile-meals.herokuapp.com/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            context.commit("setuser", data.user);
            router.push("/products" , alert("Successfully logged in"));
          });
      } else {
        alert(data);
      }
        
    },
    // REGISTER USER
    register: async (context, user) => {
      fetch("https://mobile-meals.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify(user),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
            router.push("/products");
    },

    // Get Products
    getproducts: async (context) => {
      fetch("https://mobile-meals.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => {context.commit("setproducts", products)});
    },
    getproduct: async (context) => {
      fetch("https://mobile-meals.herokuapp.com/products" + id)
        .then((res) => res.json())
        .then((Product) => {context.commit("setproduct", product)});
    },
   

    // Delete product
    deleteProduct: async (context, id) => {
      fetch("https://mobile-meals.herokuapp.com/products/" + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getProducts"));
    },
  
    // Add new product
    createProduct: async (context, product) => {
      fetch("https://mobile-meals.herokuapp.com/products/add_product", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getProducts"));
    },

    // Update product
    updateProduct: async (context, Product) => {
      fetch("https://mobile-meals.herokuapp.com/products/" + Product.id, {
        method: "PUT",
        body: JSON.stringify(Product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getProducts"));
    },
  
    },
  modules: {},
});
