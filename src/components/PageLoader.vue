<template>
    
<h1>Loading</h1>
<section>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</section>
</template>
<script>
export default{
    data: () => {
        return{

        }
    }

}
</script>
<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10em;
  font-family: sans-serif;
  text-transform: uppercase;
  z-index: 1;
  color: #fff;
  mix-blend-mode: difference;
}

section {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #fff;
}
section div {
  background-color: #000;
  width: 10%;
  height: 100%;
  transform: scaleY(0);
  animation: animate 4s linear forwards;
}
section div:nth-child(odd) {
  transform-origin: top;
}
section div:nth-child(even) {
  transform-origin: bottom;
}
section div:nth-child(1) {
  animation-delay: 0.4s;
}
section div:nth-child(2) {
  animation-delay: 0.8s;
}
section div:nth-child(3) {
  animation-delay: 1.2s;
}
section div:nth-child(4) {
  animation-delay: 1.6s;
}
section div:nth-child(5) {
  animation-delay: 2s;
}
section div:nth-child(6) {
  animation-delay: 2.4s;
}
section div:nth-child(7) {
  animation-delay: 2.8s;
}
section div:nth-child(8) {
  animation-delay: 3.2s;
}
section div:nth-child(9) {
  animation-delay: 3.6s;
}
section div:nth-child(10) {
  animation-delay: 4s;
}

@-webkit-keyframes animate {
  0% {
    transform: scaleY(0);
  }
  10%, 90% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
  }
}
@-moz-keyframes animate {
  0% {
    transform: scaleY(0);
  }
  10%, 90% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
  }
}
@keyframes animate {
  0% {
    transform: scaleY(0);
  }
  10%, 90% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
  }
}
</style>