<script setup>
import { ref, toRef, watch } from "vue";

const props = defineProps(["id"]);
const emit = defineEmits(["loaded"]);
const product = ref({});

const options = {
  method: "GET",
};

const id = toRef(props, "id");

fetchAPI(id.value);

watch(id, (newId) => {
  fetchAPI(newId);
});

async function fetchAPI(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, options);

  console.log(res);

  if (!res.ok) {
    throw new Error();
  }

  product.value = await res.json();
  emit("loaded", product.value);
}
</script>

<template>
  <div>
    <!-- <h2>{{ product.brand }}</h2> -->
    <router-link :to="{ name: 'product-info' }"></router-link>
  </div>
</template>

<style></style>
