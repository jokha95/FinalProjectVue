<script setup>
import { toRef } from "vue";
const props = defineProps(["film"]);
const filmRef = toRef(props, "film");
const MARKER = "⭐";
</script>

<template>
  <span v-if="filmRef.rt_rating >= 90">
    {{ MARKER }}{{ MARKER }}{{ MARKER }}{{ MARKER }}{{ MARKER }}
  </span>
  <span v-else-if="filmRef.rt_rating >= 80">
    {{ MARKER }} {{ MARKER }} {{ MARKER }} {{ MARKER }}
  </span>
  <span v-else-if="filmRef.rt_rating >= 60">
    {{ MARKER }} {{ MARKER }} {{ MARKER }}
  </span>
  <span v-else-if="filmRef.rt_rating >= 40"> {{ MARKER }} {{ MARKER }} </span>
  <span v-else> {{ MARKER }}</span>
</template>
