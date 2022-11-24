<script setup>
import { ref, onErrorCaptured, onMounted, computed } from "vue";
const { id } = defineProps(["id"]);
const emit = defineEmits(["loaded"]);
const product = ref({});

const options = {
  method: "GET",
};

const res = await fetch(`https://dummyjson.com/products/${id}`, options);

console.log(res);

if (!res.ok) {
  throw new Error();
}

film.value = await res.json();
emit("loaded", product.value);
</script>

<template>
  <div>
    <h2>{{ product.brand }}</h2>
    <router-link :to="{ name: 'product-info' }"></router-link>
  </div>
</template>

<style></style>
