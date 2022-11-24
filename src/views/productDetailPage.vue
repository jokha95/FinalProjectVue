<script setup>
import { ref } from "vue";
import productDetail from "../components/productDetail.vue";
const { id } = defineProps(["id"]);
const product = ref({});

function setcount(m) {
  product.value = m;
}
</script>
<template>
  <Suspense>
    <div class="container">
      <productDetail :id="id" @loaded="setcount" />
      <router-view :product="product"></router-view>
    </div>

    <template #fallback>
      <SimpleLoading class="container" />
    </template>
  </Suspense>
</template>
