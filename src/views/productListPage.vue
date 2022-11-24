<script setup>
import movieList from "../components/productList.vue";
</script>
<template>
  <Suspense>
    <movieList class="container" />
    <template #fallback> </template>
  </Suspense>
</template>
