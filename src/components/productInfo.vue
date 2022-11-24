<script setup>
import { toRef } from "vue";
const props = defineProps(["product"]);
const productRef = toRef(props, "product");
</script>
<template>
  <ul>
    <li>original title: {{ productRef.description }}</li>
    <li>original title romanised: {{ productRef.brand }}</li>
  </ul>
  <!-- <img v-if="filmRef.image" style="width: 100px" :src="filmRef.image" /> -->
</template>
