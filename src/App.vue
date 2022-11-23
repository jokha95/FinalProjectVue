<script setup>
import Todos from "./components/Todos.vue";
</script>

<template>
  <header>
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
