<script setup>
import Todos from "./components/productList.vue";
</script>

<template>
  <header>
    <h1>Seeling products App by API</h1>

    <br /><br />
    <RouterLink to="/">Home<br /></RouterLink> <br />
    <RouterLink :to="{ name: 'about' }">about<br /></RouterLink>
  </header>
  <div>
    <RouterView></RouterView>
  </div>
  <Suspense>
    <Todos class="async-component" />

    <template #fallback> ...loading </template>
  </Suspense>
</template>
<style>
input {
  text-align: left;
  font-size: 3vmin;
}
</style>
