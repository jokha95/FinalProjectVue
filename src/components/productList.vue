<script setup>
import { walkBlockDeclarations } from "@vue/compiler-core";
import { ref, onErrorCaptured, onMounted } from "vue";
import router from "../router";
const data = ref({});

const options = {
  method: "GET",
};
const res = await fetch("https://dummyjson.com/products", options);

console.log(res);

if (!res.ok) {
  throw new Error();
}

data.value = await res.json();
function goto(id) {
  router.push({
    name: "product-info",
    params: { id },
  });
}
</script>

<template>
  <section class="products">
    <div
      class="products-wrapper"
      v-for="product in data.products"
      :key="product.id"
    >
      <div class="card">
        <img :src="product.thumbnail" @click="goto(product)" />
        <RouterLink
          :to="{ name: 'product-detail', params: { name: product.title } }"
        >
          product detail
        </RouterLink>

        <div class="card-body">
          <h2>products type :{{ product.title }}</h2>
          <p>price: {{ product.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  text-align: center;
  font-size: 4vmin;
}

.products {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  height: 350px;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0 0 13px 0px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  overflow: hidden;
  margin: 0.85rem;
}

.card:hover {
  height: 280px;
}

.card img {
  width: 302px;
  height: 189px;
  border-radius: 16px;
  transition: 0.5s;
}

.card:hover img {
  border-radius: 16px 16px 0 0;
}

.card .card-body {
  padding: 0.5rem 0.85rem 1rem;
  height: 0;
}

.card .card-body h2 {
  margin: 0.5rem 0;
  font-size: 0.85rem;
  color: hsl(240, 27%, 39%);
  letter-spacing: 3px;
}

.card .card-body p {
  text-align: justify;
  font-size: 0.9rem;
  line-height: 25px;
}
</style>
