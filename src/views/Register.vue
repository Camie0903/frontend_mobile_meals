<template>
  <section>
    <div class="color"></div>
		<div class="color"></div>
		<div class="color"></div>
		<div class="box">
			<div class="square" style="--i:0;"></div>
			<div class="square" style="--i:1;"></div>
			<div class="square" style="--i:2;"></div>
			<div class="square" style="--i:3;"></div>
			<div class="square" style="--i:4;"></div>
			<div class="square" style="--i:5;"></div>
      <div class="container">
        <div class="form">
          <h2>If You Are Not A User Please Register ...</h2>
          <form @submit.prevent="register">
            <div class="inputBox">
              <input required class="register-form" type="email" v-model="email" placeholder="Email" />
              <div class="control is-expanded">
                <input v-if="showPassword" type="text" class="input" v-model="password" placeholder="Password"/>
                <input v-else type="password" class="input" v-model="password"  placeholder="Password">
                <button class="eyebutton" @click="toggleShow">
                  <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"> Show password </i>
                </button>							
              </div>
              <input required class="register-form" type="text" v-model="full_name" placeholder="Full Name" />
              <input required class="register-form" type="text" v-model="phone" placeholder="phone" />
              <input required class="register-form" type="text" v-model="user_type" placeholder="user_type" />
              <div>
                <button id="register-btn" type="submit">Register</button>
              </div>
              <div>
               <p>Already have an account?</p>
              </div>
            </div>
          </form>
          <a href="/">
          <button type="submit" id="login_btn">
               Login
              </button>
            </a>
        </div>
        <div v-if="users">Welcome {{ users.full_name }}</div>
      </div>
    </div>
</section>
</template>
 <script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      full_name: "",
      phone: "",
      user_type: "",
    };
  },
  computed: {
    users(){
      return this.$store.state.users;
    },
  
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
 
  
  methods: {
    register() {
      return this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
        full_name: this.full_name,
        phone: this.phone,
        user_type: this.user_type,
      });
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script> 
<style scoped>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: linear-gradient(to bottom, #f1f4f9, #dff1ff);
  }
  
  section .color {
    position: absolute;
    filter: blur(150px);
  }
  
  section .color:nth-child(1) {
    top: -350px;
    width: 600px;
    height: 600px;
    background: #ff359b;
    /*pink*/
  }
  
  section .color:nth-child(2) {
    bottom: -150px;
    width: 600px;
    height: 600px;
    background: #fffd87;
    /*yellow*/
  }
  
  section .color:nth-child(3) {
    bottom: 50px;
    width: 300px;
    height: 300px;
    background: #00d2ff;
    /*blue*/
  }
  
  .box {
    position: relative;
  }
  
  .box .square {
    position: absolute;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    animation: animate 10s linear infinite;
    animation-delay: calc(-1s * var(--i));
  }
  
  @keyframes animate {
    0%, 100% {
      transform: translateY(-40px);
    }
    50% {
      transform: translateY(40px);
    }
  }
  .box .square:nth-child(1) {
    top: -50px;
    right: -60px;
    width: 100px;
    height: 100px;
  }
  
  .box .square:nth-child(2) {
    top: 150px;
    left: -100px;
    width: 120px;
    height: 120px;
    z-index: 2;
  }
  
  .box .square:nth-child(3) {
    bottom: -40px;
    right: -40px;
    width: 70px;
    height: 70px;
    z-index: 0;
  }
  
  .box .square:nth-child(4) {
    bottom: -60px;
    left: 40px;
    width: 50px;
    height: 50px;
    z-index: 2;
  }
  
  .box .square:nth-child(5) {
    top: -50px;
    left: 120px;
    width: 50px;
    height: 50px;
    z-index: 0;
  }
  
  .container {
    position: relative;
    width: 400px;
    height: 500px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .form {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 55px;
  }
  
  .form h2 {
    position: relative;
    color: #000;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 40px;
  }
  
  .form h2::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background: #000;
  }
  
  .form .inputBox {
    width: 100%;
    margin-top: 20px;
  }
  
  .form .inputBox input {
    margin-bottom: 10px;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    outline: none;
    padding: 10px 20px;
    border-radius: 35px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 16px;
    letter-spacing: 1px;
    color: #000;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .form .inputBox input[type=submit] {
    background: #fff;
    color: #666;
    max-width: 100px;
    cursor: pointer;
    margin-bottom: 20px;
    font-weight: 600;
  }
  
  .forget {
    margin-top: 5px;
    color: #000;
  }
  
  .forget a {
    color: #000;
    font-weight: 600;
  }
</style>
