<script setup>
import Todos from "./components/productList.vue";
</script>

<template>
  <!-- <input
    class="form-control border-left-0 border shadow-none"
    type="search"
    placeholder="Search for a products"
    style="border-radius: 0px 5px 5px 0px"
    id="example-search-input"
    v-on:input="debounceInput"
    v-model="country_name"
  /> -->
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
    <!-- <Layout class="async-component" /> -->

    <template #fallback>
      ...loading
      <!-- <SimpleLoading class="async-component" /> -->
    </template>
  </Suspense>
</template>
<style>
input {
  text-align: left;
  font-size: 3vmin;
}
</style>
