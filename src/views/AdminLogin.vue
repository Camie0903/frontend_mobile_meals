<template>
  <div class="Login">
    <h1 class="well">Welcome Admin</h1>
    <h2 class="well">Please Login...</h2>
    <div class="container">
    <form @submit.prevent="login" >
      
      <input class="login-form-email" type="text" v-model="email" placeholder="Email" />
     
    
      <input class="login-form-password" type="text" v-model="password" placeholder="Password" />
     
      <div>
      <button type="submit" @click.prevent="login()" id="login-btn">Login</button>
      </div>
    </form>
      <div>
  <button class="adm_btn">
    <a href="/">
      <h4 class="Adm-Btn">User</h4>
    </a>
  </button>
      </div>
    </div>
    <div v-if="users">Welcome {{ users.full_name }}</div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
        if(this.input.user_type == "admin") {
            this.$store.commit("setAuthentication", true);
        } else {
            alert("You're not an Admin, please login or register as a user");
        }
    }
  },
};
</script>
<style scoped>
.adm_btn{
  border: none;
  background: transparent;
}
.Adm-Btn{
  text-decoration: none;
  color: black;

}
.well{
  /* margin-left: 600px; */
  margin-bottom: 30px;
  color:black;
}
.Login {
  padding-top: 80px;
  height: 80vh;
background-image: linear-gradient(to left, #21af85, #00a0a7, #008bbf, #0071be, #67509f);  /* background-color: rgba(167, 165, 196, 0.3); */
}

.container {
  margin: auto;
  padding: auto;
  width: 350px;
  height: 390px;
background-image: linear-gradient(to left, #21af85, #00a0a7, #008bbf, #0071be, #67509f);  /* background-color: rgba(167, 165, 196, 0.3); */
  backdrop-filter: blur(3px);
  border: 2px solid white;
  border-radius: 10px;
  background-clip: padding-box;
}

.login-form-email{
  margin: 35px;
   border: 0;
  outline:0;
  border-bottom: 2px solid black;
  width: 50%;
  font-size: 20px;
  background: transparent;
  /* color: white; */
}

.login-form-password{
  margin: 35px;
  border: 0;
  outline:0;
  border-bottom: 2px solid black;
  width: 50%;
  font-size: 20px;
  background: transparent;
  /* color: white; */
}

#login-btn {
  margin: 35px;
  background: transparent;
  border: none;
  font-weight: bolder;
  font-size: 20px;
  
}

#regist-btn{
  border: none;
  background: transparent;
}
</style>

