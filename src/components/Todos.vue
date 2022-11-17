<script setup>
import { ref, onErrorCaptured } from "vue";
const response = ref({});

// adding delay
await new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

onErrorCaptured((err) => {
  // error processing
});

const res = await fetch(
  "https://jsonplaceholder.typicode.com/todos/" +
    Math.floor(Math.random() * 10) +
    1
);
console.log(res);
if (!res.ok) {
  throw new Error();
}
response.value = await res.json();
</script>

<template>
  <div>
    <h2>{{ response.userId }}</h2>
    <h2>{{ response.title }}</h2>
    <h2>{{ response.completed }}</h2>
  </div>
</template>
