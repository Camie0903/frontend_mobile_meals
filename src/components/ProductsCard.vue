<template>
    <div class="col-md-3">
    
    <router-link class="router-text" :to = "{ name: 'oneProduct', params: { id: product.id } }">
    <div class="mar">
      <div class="card m-3" style="width: 18rem">
        <img v-bind:src="product.image" class="img-fluid" />
        <div class="card-body">
          <p class="card-text-event">{{ product.title }}</p>
          <!-- <p class="card-text-event">{{ product.Date }}</p> -->
          <p class="card-text-event">R{{ product.price }}</p>
          <!-- <p class="card-text-event">{{ product.descriptions }}</p> -->
        </div>
      </div>
      </div>
    </router-link>
  </div>
</template>
<script>
    export default {
        // name: "product-card",
        props: ['product'],
        
    };
    

</script>
<style scoped>
.img-fluid {
  width: 18rem;
  border-radius: 5px;
  transition: 0.2 linear;
}
.img-fluid:hover {
  transform: scale(1.1);
}
.router-text{
  text-decoration: none;
  color: black;
  border: 1px solid black;
}

.mar{
  margin: 15px;
}
</style>