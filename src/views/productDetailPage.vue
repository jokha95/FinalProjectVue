<script setup>
import { ref } from "vue";
import productDetail from "../components/productDetail.vue";
const { id } = defineProps(["id"]);
const film = ref({});

function setcount(m) {
  film.value = m;
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
