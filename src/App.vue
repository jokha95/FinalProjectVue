<script setup>
import Todos from "./components/productList.vue";
</script>

<template>
  <header>
    <h1>Seeling products App by API</h1>

    <RouterLink to="/">Home<br /></RouterLink> <br /><br />
    <RouterLink :to="{ name: 'about' }">about<br /></RouterLink>
  </header>
  <div>
    <RouterView></RouterView>
  </div>
  <Suspense>
    <Todos class="async-component" />
    <!-- <Layout class="async-component" /> -->

    <template #fallback>
      ...loading
      <!-- <SimpleLoading class="async-component" /> -->
    </template>
  </Suspense>
</template>
