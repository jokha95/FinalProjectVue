<script setup>
import Todos from "./components/Todos.vue";
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink> <br />
    <RouterLink :to="{ name: 'about' }">about</RouterLink>
  </header>
  <div>
    <RouterView></RouterView>
  </div>
  <Suspense>
    <Todos class="async-component" />
    <template #fallback>
      <SimpleLoading class="async-component" />
    </template>
  </Suspense>
</template>
