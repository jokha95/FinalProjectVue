<template>
  <div>
    {{ country }}
  </div>
</template>

<script setup>
const props = defineProps(["name"]);
// id?
const country = { name: props.name, flags: {} };
</script>
