import { createStore } from "vuex";
import router from "@/router";

export default createStore({  
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    token: null,
    authenticated: false,
    StoreCart: []
  },
  getters: {
    StoreCart: (state) => state.StoreCart,
  },
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
    ADD_Item(state, user_id) {
      state.StoreCart.push(user_id);
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index, 1);
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
    // register: async (context, user) => {
    //   fetch("https://mobile-meals.herokuapp.com/users/register", {
    //     method: "POST",
    //     body: JSON.stringify(user),

    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },

    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => context.commit("setUser", json));
    //         router.push("/products");
    // },


    // Register user
    register: async (context, payload) => {
      const {
        email,
        password,
        full_name,
        phone,
        user_type,
      } = payload;
      fetch("https://mobile-meals.herokuapp.com/users/register", {
        method: "POST",
        mode:'no-cors',
        body: JSON.stringify({
          email: email,
          password: password,
          full_name: full_name,
          phone: phone,
          user_type: user_type,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          context.commit("setusers", json);
        });
        console.log(payload);
    },

    getusers: async(context) => {
      fetch("https://mobile-meals.herokuapp.com/users")
      .then((res) => res.json())
      .then((users) => context.commit("setusers", users));
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
    addItem(context, user_id) {
      context.commit("ADD_Item", user_id);
    },

    removeItem(context, index) {
      context.commit("REMOVE_Item", index);
    },

    
  },

    },
);
