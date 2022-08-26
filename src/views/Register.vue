<template>
  <div class="regis-page">
    <h1>If You Are Not A User Please Register ...</h1>
      <div class="container">
    <form @submit.prevent="register">
      <input class="register-form" type="email" v-model="email" placeholder="Email" />
      <input class="register-form" type="text" v-model="password" placeholder="Password" />
      <input class="register-form" type="text" v-model="full_name" placeholder="Full Name" />
      <input class="register-form" type="text" v-model="phone" placeholder="phone" />
      <input class="register-form" type="text" v-model="user_type" placeholder="user_type" />
      <div>
      <button id="register-btn" type="submit">Register</button>
      </div>
    </form>
    </div>
    <div v-if="users">Welcome {{ users.full_name }}</div>
  </div>
</template>
 <script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
      full_name: "",
      phone: "",
      user_type: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
        full_name: this.full_name,
        phone: this.phone,
        user_type: this.user_type,
      });
    },
  },


};
</script> 
<style scoped>
h1 {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  color:black;
}
.regis-page[data-v-63ae9146] {
    height: 150vh;
    background-image: linear-gradient(to left, #21af85, #00a0a7, #008bbf, #0071be, #67509f);  /* background-color: rgba(167, 165, 196, 0.3); */

}
/* form{
  width:50%
} */
.container[data-v-63ae9146] {
    width: 350px;
    height: auto;
  background-image: linear-gradient(to left, #21af85, #00a0a7, #008bbf, #0071be, #67509f);  /* background-color: rgba(167, 165, 196, 0.3); */
    backdrop-filter: blur(3px);
    border: 2px solid black;
    border-radius: 10px;
    background-clip: padding-box;
    margin: auto;
    margin-top: 5%;
}



.register-form{
  margin: 35px;
    border: 0;
  outline:0;
  border-bottom: 2px solid black;
  width: 73%;
  font-size: 20px;
  background: transparent;
  /* color: white; */
}

#register-btn {
  margin: 35px;
  background: transparent;
  border: none;
  font-weight: bolder;
  font-size: 20px;
}
</style>
